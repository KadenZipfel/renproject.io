import * as React from "react";

import ChartistGraph from "react-chartist";

import { GithubRepo, calculateTotalActivity } from "../lib/github";

interface GithubActivityProps {
    repos: GithubRepo[];
}

interface GithubActivityState {
    activity: number[];
    selected: string;
}


export class GithubActivity extends React.Component<GithubActivityProps, GithubActivityState> {
    constructor(props: GithubActivityProps) {
        super(props);
        this.state = {
            activity: [],
            selected: "1Y",
        };
    }

    public async componentDidMount(): Promise<void> {
        const { repos } = this.props;
        const activity = await calculateTotalActivity(repos);
        console.log(activity);
        this.setState({ activity });
    }

    public render(): JSX.Element {
        const { selected, activity } = this.state;
        const limit = this.getLimit(selected);
        const data = limit > 0 ? activity.slice(limit) : activity;
        const lineChartData = {
            labels: [],
            series: [data],
        }
        const lineChartOptions = {
            height: 200,
            width: 400,
            low: Math.min(...data),
            high: Math.max(...data),
            chartPadding: 0,
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
        const start = data[0];
        const end = data.reduce((total, num) => total + num, 0);
        const commitChanges = end - start;
        const percentChange = start === 0 ? 0 : Math.round(commitChanges / start * 100);
        return (
            <div className="gh--activity">
                {activity.length === 0 ?
                    <p>Generating activity graph...</p> :
                    <div className="gh--activity--chart">
                        <div className="gh--activity--changes">
                            <span>{`${commitChanges > 0 ? "+" : ""}${commitChanges}`}</span>
                            <span>{`${commitChanges === 0 ? "±0%" : percentChange === 0 ? "+∞%" : `${percentChange > 0 ? "+" : ""}${percentChange}%`}`}</span>
                        </div>
                        <ChartistGraph data={lineChartData} options={lineChartOptions} type={"Line"} />
                        <ul>
                            <li className={`one ${selected === "1M" ? "selected" : ""}`}><a onClick={() => { this.updateSelected("1M") }}>1M</a></li>
                            <li className={`two ${selected === "4M" ? "selected" : ""}`}><a onClick={() => { this.updateSelected("4M") }}>4M</a></li>
                            <li className={`three ${selected === "6M" ? "selected" : ""}`}><a onClick={() => { this.updateSelected("6M") }}>6M</a></li>
                            <li className={`four ${selected === "1Y" ? "selected" : ""}`}><a onClick={() => { this.updateSelected("1Y") }}>1Y</a></li>
                            <hr />
                        </ul>
                    </div>
                }
            </div>
        );
    }

    private updateSelected = (selected: string) => {
        this.setState({ selected });
    }

    private getLimit = (selected: string) => {
        switch (selected) {
            case "1M":
                return 52 - 4;
            case "4M":
                return 52 - 16;
            case "6M":
                return 52 - 26;
            default:
                return 0;
        }
    }

}
