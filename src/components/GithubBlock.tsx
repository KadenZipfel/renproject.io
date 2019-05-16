import * as React from "react";
import { GithubRepo } from "../lib/github";
import { ExternalLink } from "./ExternalLink";
import { naturalTime } from "@renex/react-components";

import colours from "github-colors";

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
        const ghStar = require("../styles/images/icons/gh-icon-star.svg");
        const ghLaw = require("../styles/images/icons/gh-icon-law.svg");
        return (
            <div className="gh--block">
                <div className="gh--content">
                    <h2><ExternalLink href={repo.html_url}>{repo.name} &rarr;</ExternalLink></h2>
                    <p>{repo.description}</p>
                </div>
                <div className="gh--footer">
                    <div className="repo--stats">
                        <div className="repo--lang">
                            <span className="repo--stat--icon">
                                <div className="repo--lang--dot">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="50" fill={colours.get(repo.language).color} />
                                    </svg>
                                </div>
                            </span>
                            <span>{repo.language}</span>
                        </div>
                        <div className="repo--stars"><span className="repo--stat--icon"><img src={ghStar} /></span>{repo.stargazers_count}</div>
                        {repo.license && <div className="repo--license"><span className="repo--stat--icon"><img src={ghLaw} /></span>{repo.license.spdx_id}</div>}
                    </div>
                    <div className="repo--timeago">Updated {naturalTime(repo.updated_at.getTime() / 1000, { message: "something", suffix: "ago", countDown: false })}</div>
                </div>
            </div>
        );
    }

}
