import * as React from "react";

import { Milestone, sortMilestones } from "../lib/milestone";
import { MilestoneBlock } from "./MilestoneBlock";

interface MilestonesProps {
    milestones: Milestone[];
}

interface MilestonesState {
    tagsFilter: Set<string>;
}


export class Milestones extends React.Component<MilestonesProps, MilestonesState> {
    public constructor(props: MilestonesProps) {
        super(props);
        this.state = {
            tagsFilter: new Set<string>(),
        };
    }

    public render(): JSX.Element {
        const { milestones } = this.props;
        const completedMilestones: Milestone[] = [];
        const incompleteMilestones: Milestone[] = [];
        milestones.forEach(m => {
            if (this.showMilestone(m)) {
                if (m.achieved) {
                    completedMilestones.push(m);
                } else {
                    incompleteMilestones.push(m);
                }
            }
        });
        return (
            <div className="milestones">
                <h1>Milestones</h1>
                <div className="milestones--list">
                    {
                        completedMilestones.sort(sortMilestones).concat(incompleteMilestones).map(m => {
                            return <MilestoneBlock key={`milestone--block--${m.title}--${m.date}`} milestone={m} />;
                        })
                    }
                </div>
            </div>
        );
    }

    private showMilestone = (m: Milestone): boolean => {
        const { tagsFilter } = this.state;
        if (tagsFilter.size == 0) {
            return true;
        }
        const intersection = new Set([...m.tags].filter(x => tagsFilter.has(x)));
        return intersection.size > 0;
    }
}
