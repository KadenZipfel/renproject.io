import * as React from "react";
import { GithubRepo } from "../lib/github";
import { ExternalLink } from "./ExternalLink";
import { naturalTime } from "@renex/react-components";

interface GithubBlockProps {
    repo: GithubRepo;
}

interface GithubBlockState {
}

export class GithubBlock extends React.Component<GithubBlockProps, GithubBlockState> {
    constructor(props: GithubBlockProps) {
        super(props);
    }

    public render(): JSX.Element {
        const { repo } = this.props;
        return (
            <div className="github--block">
                <ExternalLink href={repo.html_url}>{repo.name} &rarr;</ExternalLink>
                <p>{repo.description}</p>
                <div>
                    <div>{repo.language}</div>
                    <div>{repo.stargazers_count}</div>
                    {repo.license && <div>{repo.license.spdx_id}</div>}
                    <div>Updated {naturalTime(repo.updated_at.getTime() / 1000, { message: "something", suffix: "ago", countDown: false })}</div>
                </div>
            </div>
        );
    }

}
