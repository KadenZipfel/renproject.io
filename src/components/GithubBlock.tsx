import * as React from "react";
import { GithubRepo } from "../lib/github";
import { ExternalLink } from "./ExternalLink";

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
            </div>
        );
    }

}
