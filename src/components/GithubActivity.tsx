import * as React from "react";

import ChartistGraph from "react-chartist";

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
        this.setState({ activity });
    }

    public render(): JSX.Element {
        const { activity } = this.state;
        const lineChartData = {
            labels: [],
            series: [activity],
        }
        const lineChartOptions = {
            low: Math.min(...activity),
            high: Math.max(...activity),
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
              axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
              },
        }
        return (
            <div className="gh--activity">
                {activity.length === 0 ?
                    "Loading..." :
                    <ChartistGraph data={lineChartData} options={lineChartOptions} type={"Line"} />
                }
            </div>
        );
    }

}
