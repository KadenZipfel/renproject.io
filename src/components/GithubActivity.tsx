import * as React from "react";

import ChartistGraph from "react-chartist";

import { GithubRepo, calculateTotalActivity } from "../lib/github";
import { withTrashable, TrashableReactProps } from "../lib/trashable";

interface GithubActivityProps extends TrashableReactProps {
    repos: GithubRepo[];
}

interface GithubActivityState {
    activity: number[];
    selected: string;
}

class GithubActivityClass extends React.Component<GithubActivityProps, GithubActivityState> {
    constructor(props: GithubActivityProps) {
        super(props);
        this.state = {
            activity: [],
            selected: "1Y",
        };
    }

    public async componentDidMount(): Promise<void> {
        const { repos } = this.props;
        const activity = await this.props.registerPromise(calculateTotalActivity(repos));
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
        const commitChanges = data.reduce((total, num) => total + num, 0);
        // const commitChanges = data[data.length - 1] - data[0];
        // const percentChange = data[0] === 0 ? 0 : Math.round(commitChanges / data[0] * 100);
        const activitySteps = ["1Y", "6M", "3M", "1M"];
        return (
            <div className="gh--activity">
                {activity.length === 0 ?
                    <p>Generating activity graph...</p> :
                    <div className="gh--activity--chart">
                        <div className="gh--activity--changes">
                            <span>{`${commitChanges > 0 ? "+" : ""}${commitChanges}`}</span>
                            {/* <span>{`${commitChanges === 0 ? "±0%" : percentChange === 0 ? "+∞%" : `${percentChange > 0 ? "+" : ""}${percentChange}%`}`}</span> */}
                        </div>
                        <ChartistGraph data={lineChartData} options={lineChartOptions} type={"Line"} />
                        <ul>
                            {activitySteps.map((step, index) =>
                                <li key={step} className={`step${index+1}of${activitySteps.length} ${selected === step ? "selected" : ""}`}><a onClick={() => { this.updateSelected(step) }}>{step}</a></li>
                            )}
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
        let weeks = 52;
        if (selected[selected.length-1] === "M") {
            weeks = 4 * parseInt(selected.substring(0, selected.length-1));
        }
        return 52 - weeks;
    }

}

export const GithubActivity = withTrashable(GithubActivityClass);