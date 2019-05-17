import * as React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { fetchRepos, GithubRepo, GithubStatistics, calculateStats } from "../lib/github";
import { GithubBlock, GithubLanguage, GithubStar } from "./GithubBlock";
import { naturalTime } from "@renex/react-components";
import { GithubActivity } from "./GithubActivity";
import { ExternalLink } from "./ExternalLink";
import { REN_URLS } from "../lib/constants";

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
        const { limit } = this.props;
        const { stats, error, ready, repos } = this.state;
        const fetchError = <p>Failed to fetch information from Github. Please try again later.</p>;
        const loadingMessage = <p>Fetching data from Github...</p>;
        return (
            <div className="gh--stats">
                <h1>Github</h1>
                {error ? fetchError : !ready || !stats ? loadingMessage :
                    <Tabs forceRenderTabPanel={true}>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Top Repos</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="gh--stats--overview">
                                <div>
                                    <h2>Activity</h2>
                                    <GithubActivity repos={repos} />
                                </div>
                                <div>
                                    <h2>Last Commit</h2>
                                    <p>{naturalTime(stats.lastUpdated.getTime() / 1000, { message: "A few seconds ago", suffix: "ago", countDown: false })}</p>
                                </div>
                                <div>
                                    <h2>Stars</h2>
                                    <GithubStar count={stats.totalStars} />
                                </div>
                                <div>
                                    <h2>Languages</h2>
                                    <div className="gh--stats--lang">{stats.languages.map(lang => <GithubLanguage key={lang} language={lang} />)}</div>
                                </div>
                            </div>
                            <div className="gh--stats--footer">
                                <ExternalLink href={REN_URLS.github}>View on Github &rarr;</ExternalLink>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="github--top--repos">
                                {repos.slice(0, limit).map(repo => <GithubBlock key={repo.id} repo={repo} />)}
                            </div>
                        </TabPanel>
                    </Tabs>}
            </div>
        );
    }

    private updateRepos = async (): Promise<void> => {
        const { usernames } = this.props;

        try {
            let repos: GithubRepo[] = [];
            for (const username of usernames) {
                repos = repos.concat(await fetchRepos(username));
            }
            console.log(repos);
            console.log(repos.map(r => r.node_id).sort());
            console.log(Array.from(new Set(repos.map(r => r.node_id))));
            // calculate stats from all repos
            const stats = calculateStats(repos);

            // Only show the Github repos which were updated within the last month
            const filterDate = new Date();
            filterDate.setMonth(filterDate.getMonth() - 1);
            repos = repos.filter(repo => repo.updated_at > filterDate);

            // sort by stars
            repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

            console.log(repos);
            this.setState({ repos, stats, ready: true, error: false });
        } catch (err) {
            console.error(err);
            this.setState({ error: true });
        }
    }

}
