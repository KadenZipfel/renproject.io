import * as React from "react";

import { Milestone, sortMilestones } from "../lib/milestone";
import { MilestoneBlock } from "./MilestoneBlock";

interface MilestonesProps {
    milestones: Milestone[];
    tagsFilter?: string[];
}

interface MilestonesState {
    completedMilestones: Milestone[];
    incompleteMilestones: Milestone[];
}


export class Milestones extends React.Component<MilestonesProps, MilestonesState> {
    public constructor(props: MilestonesProps) {
        super(props);
        this.state = {
            completedMilestones: props.milestones.filter(m => m.achieved),
            incompleteMilestones: props.milestones.filter(m => !m.achieved),
        }
    }

    public render(): JSX.Element {
        const { completedMilestones, incompleteMilestones } = this.state;
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
}
