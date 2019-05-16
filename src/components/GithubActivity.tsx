import * as React from "react";
import { GithubRepo, calculateTotalActivity } from "../lib/github";

interface GithubActivityProps {
    repos: GithubRepo[];
}

interface GithubActivityState {
    activity: number[];
}


export class GithubActivity extends React.Component<GithubActivityProps, GithubActivityState> {
    constructor(props: GithubActivityProps) {
        super(props);
        this.state = {
            activity: []
        };
    }

    public async componentDidMount(): Promise<void> {
        const { repos } = this.props;
        const activity = await calculateTotalActivity(repos);
        console.log(activity);
        this.setState( { activity } );
    }

    public render(): JSX.Element {
        const { activity } = this.state;
        return (
            <div className="gh--activity">
                {activity.length === 0 ? "Loading..." : "done"}
            </div>
        );
    }

}
