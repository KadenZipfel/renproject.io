import * as React from "react";
import { fetchRepos, GithubRepo } from "../lib/github";
import { GithubBlock } from "./GithubBlock";

interface GithubStatsProps {
    usernames: string[];
}

interface GithubStatsState {
    repos: GithubRepo[];
    ready: boolean;
}

export class GithubStats extends React.Component<GithubStatsProps, GithubStatsState> {
    constructor(props: GithubStatsProps) {
        super(props);
        this.state = {
            repos: [],
            ready: false,
        };
    }

    public async componentDidMount(): Promise<void> {
        const { usernames } = this.props;

        // Only show the Github repos which were updated within the last month
        const filterDate = new Date();
        filterDate.setMonth(filterDate.getMonth() - 1);

        let repos = this.state.repos;
        for (const username of usernames) {
            repos = repos.concat(await fetchRepos(username, { date: filterDate }));
        }

        console.log(repos);
        this.setState({ repos, ready: true });
    }

    public render(): JSX.Element {
        const { ready, repos } = this.state;
        return (
            <>
                {!ready ? "Loading..." : <div>
                    {repos.map(repo => <GithubBlock repo={repo} />)}
                </div>}
            </>
        );
    }

}
