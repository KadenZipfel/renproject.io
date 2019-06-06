import * as React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { fetchRepos, GithubRepo, calculateStats, calculateTotalActivity } from "../lib/github";
import { GithubBlock, GithubLanguage, GithubStar } from "./GithubBlock";
import { GithubActivity } from "./GithubActivity";
import { ExternalLink } from "./ExternalLink";
import { REN_URLS } from "../lib/constants";
import { naturalTime } from "../lib/conversions";
import { withTrashable, TrashableProps } from "react-trashable";
import { StoreContext } from "../store/context";

interface GithubStatsProps extends TrashableProps {
    usernames: string[];
    limit?: number;
}

const GithubStatsClass = (props: GithubStatsProps) => {
    const [error, setError] = React.useState(false);
    const storeContext = React.useContext(StoreContext);
    if (storeContext === null) {
        return <></>;
    }
    const { githubRepos, setGithubRepos, githubActivity, setGithubActivity } = storeContext;

    const fetchAllRepos = async (): Promise<GithubRepo[]> => {
        const { usernames } = props;
        return Promise.all(usernames.map(username => fetchRepos(username))).then(l => ([] as GithubRepo[]).concat(...l));
    }

    const fetchData = async () => {
        if (githubRepos.length > 0) {
            return
        };

        try {
            const repos = await props.registerPromise(fetchAllRepos());
            setGithubRepos(repos);
            const activity = await props.registerPromise(calculateTotalActivity(repos));
            setGithubActivity(activity);
        } catch (err) {
            console.error(err);
            setError(true);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    const filterRepos = (): GithubRepo[] => {
        const { limit } = props;
        // Only show the Github repos which were updated within the last month
        const filterDate = new Date();
        filterDate.setMonth(filterDate.getMonth() - 1);
        let repos = githubRepos.filter(repo => repo.updated_at > filterDate);

        // sort by stars
        repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        if (limit && limit > 0) {
            repos = repos.slice(0, limit);
        }
        return repos;
    }

    const ready = githubRepos.length > 0;
    const stats = calculateStats(githubRepos);
    const fetchError = <p>Failed to fetch information from Github. Please try again later.</p>;
    const loadingMessage = <p>Fetching data from Github...</p>;
    return (
        <div className="gh--stats">
            <h1>Github</h1>
            {error ? fetchError : !ready ? loadingMessage :
                <Tabs forceRenderTabPanel={true}>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Top Repos</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="gh--stats--overview">
                            <div>
                                <h2>Commit Activity</h2>
                                <GithubActivity activity={githubActivity} />
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
                            {filterRepos().map(repo => <GithubBlock key={repo.id} repo={repo} />)}
                        </div>
                    </TabPanel>
                </Tabs>}
        </div>
    );

}

export const GithubStats = withTrashable(GithubStatsClass);
