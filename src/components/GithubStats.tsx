import * as React from "react";
import { fetchRepos, GithubRepo, GithubStatistics, calculateStats } from "../lib/github";
import { GithubBlock } from "./GithubBlock";
import { naturalTime } from "@renex/react-components";

interface GithubStatsProps {
    usernames: string[];
    limit?: number;
}

interface GithubStatsState {
    repos: GithubRepo[];
    stats: null | GithubStatistics;
    ready: boolean;
    error: boolean;
}

export class GithubStats extends React.Component<GithubStatsProps, GithubStatsState> {
    constructor(props: GithubStatsProps) {
        super(props);
        this.state = {
            repos: [],
            stats: null,
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
        const { stats, error, ready, repos } = this.state;
        return (
            <div className="gh-stats">
                <p>{stats && stats.totalStars}</p>
                <p>{stats && JSON.stringify(stats.languages)}</p>
                <p>{stats && naturalTime(stats.lastUpdated.getTime() / 1000, { message: "", suffix: "ago", countDown: false })}</p>
                {error ? "an error occurred. try again later." : !ready ? "Loading..." : <div className="github--top--repos">
                    {repos.map(repo => <GithubBlock key={repo.id} repo={repo} />)}
                </div>}
            </div>
        );
    }

    private updateRepos = async (): Promise<void> => {
        const { limit, usernames } = this.props;

        try {
            let repos: GithubRepo[] = [];
            for (const username of usernames) {
                repos = repos.concat(await fetchRepos(username));
            }
            // calculate stats from all repos
            const stats = calculateStats(repos);

            // Only show the Github repos which were updated within the last month
            const filterDate = new Date();
            filterDate.setMonth(filterDate.getMonth() - 1);
            repos = repos.filter(repo => repo.updated_at > filterDate);

            // sort by stars
            repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

            if (limit && limit > 0) {
                repos = repos.slice(0, limit);
            }
            console.log(repos);
            this.setState({ repos, stats, ready: true, error: false });
        } catch (err) {
            console.error(err);
            this.setState({ error: true });
        }
    }

}
