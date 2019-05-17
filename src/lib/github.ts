import axios, { AxiosRequestConfig } from "axios";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface InternalGithubRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: false
    },
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: any | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: any | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: null | {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
};

export interface GithubRepo extends Omit<Omit<Omit<InternalGithubRepo, "pushed_at">, "updated_at">, "created_at"> {
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
}

export interface GithubStatistics {
    totalStars: number;
    lastUpdated: Date;
    languages: string[];
}

export interface GithubActivity {
    all: number[];
    owner: number[];
}

export const fetchActivity = async (username: string, repo: string): Promise<GithubActivity> => {
    const resp = await ghGet(`https://api.github.com/repos/${username}/${repo}/stats/participation`);
    return resp.data as GithubActivity;
}

export const fetchRepos = async (username: string): Promise<GithubRepo[]> => {
    let repos: GithubRepo[] = [];
    const resp = await ghGet(`https://api.github.com/users/${username}/repos`);
    for (const repo of resp.data as InternalGithubRepo[]) {
        const { created_at, updated_at, pushed_at, ...newRepo } = repo;
        newRepo["created_at"] = new Date(created_at);
        newRepo["updated_at"] = new Date(updated_at);
        newRepo["pushed_at"] = new Date(pushed_at);
        repos.push(newRepo as GithubRepo);
    }
    return repos;
}

export const calculateStats = (repos: GithubRepo[]): GithubStatistics => {
    let lastUpdated = null;
    let totalStars = 0;
    let languageCount = new Map<string, number>();
    for (const repo of repos) {
        totalStars += repo.stargazers_count;
        if (repo.language !== null) {
            console.log(repo.language);
            const count = languageCount.get(repo.language) || 0;
            languageCount.set(repo.language, count + 1);
        }
        if (lastUpdated === null || repo.updated_at > lastUpdated) {
            lastUpdated = repo.updated_at;
        }
    }

    const languages = Array.from(languageCount.keys()).sort((lang1, lang2) => (languageCount.get(lang2) || 0) - (languageCount.get(lang1) || 0));
    const stats = {
        totalStars,
        lastUpdated,
        languages,
    };
    console.log(stats);
    return stats as GithubStatistics;
}

export const calculateTotalActivity = async (repos: GithubRepo[]): Promise<number[]> => {
    const promises = repos.map(r => fetchActivity(r.owner.login, r.name)
        .then(stats => stats.all)
        .catch((err) => {
            console.error(err);
            return [] as number[];
        })
    );
    return Promise.all(promises).then(allActivity => {
        return allActivity.reduce((runningTally, current) => {
            if (runningTally.length === 0) {
                return current;
            }
            return runningTally.map((num, idx) => num + current[idx]);
        });
    });
}

const ghGet = (url: string) => {
    let config: AxiosRequestConfig | undefined = undefined;
    if (process.env.REACT_APP_GITHUB_TOKEN) {
        config = {
            headers: {"Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`},
        };
    }
    return axios.get(url, config)
};
