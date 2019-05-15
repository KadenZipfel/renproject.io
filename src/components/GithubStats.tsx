import * as React from "react";
import { fetchRepos, GithubRepo } from "../lib/github";
import { GithubBlock } from "./GithubBlock";

interface GithubStatsProps {
    usernames: string[];
}

interface GithubStatsState {
    repos: GithubRepo[];
    ready: boolean;
    error: boolean;
}

export class GithubStats extends React.Component<GithubStatsProps, GithubStatsState> {
    constructor(props: GithubStatsProps) {
        super(props);
        this.state = {
            repos: [],
            ready: false,
            error: false,
        };
    }

    public async componentDidMount(): Promise<void> {
        console.log("start did mount");
        await this.updateRepos();
        console.log("finished did mount");
    }

    public render(): JSX.Element {
        const { error, ready, repos } = this.state;
        return (
            <>
                {!ready ? "Loading..." : error ? "an error occurred. try again later." : <div>
                    {repos.map(repo => <GithubBlock key={repo.id} repo={repo} />)}
                </div>}
            </>
        );
    }

    private updateRepos = async (): Promise<void> => {
        const { usernames } = this.props;

        // Only show the Github repos which were updated within the last month
        const filterDate = new Date();
        filterDate.setMonth(filterDate.getMonth() - 1);

        try {
            let repos: GithubRepo[] = [];
            for (const username of usernames) {
                repos = repos.concat(await fetchRepos(username, { date: filterDate }));
            }
            console.log(repos);
            this.setState({ repos, ready: true });
        } catch (err) {
            console.error(err);
            this.setState({ error: true });
        }
    }

}
