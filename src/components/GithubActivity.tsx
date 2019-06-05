import * as React from "react";

import ChartistGraph from "react-chartist";

interface GithubActivityProps {
    activity: number[];
};

export const GithubActivity = (props: GithubActivityProps) => {
    const [selected, setSelected] = React.useState("1Y");

    const getLimit = (selected: string) => {
        let weeks = 52;
        if (selected[selected.length - 1] === "M") {
            weeks = 4 * parseInt(selected.substring(0, selected.length - 1));
        }
        return 52 - weeks;
    }

    const limit = getLimit(selected);
    const { activity } = props;
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
                            <li key={step} className={`step${index + 1}of${activitySteps.length} ${selected === step ? "selected" : ""}`}><a onClick={() => { setSelected(step) }}>{step}</a></li>
                        )}
                        <hr />
                    </ul>
                </div>
            }
        </div>
    );

}
