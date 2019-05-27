import * as React from "react";

import { Milestone, sortMilestones } from "../lib/milestone";
import { MilestoneBlock, MilestoneTag } from "./MilestoneBlock";

interface MilestonesProps {
    milestones: Milestone[];
}

interface MilestonesState {
    allTags: Set<string>;
    tagsFilter: Set<string>;
}


export class Milestones extends React.Component<MilestonesProps, MilestonesState> {
    public constructor(props: MilestonesProps) {
        super(props);
        let allTags: string[] = [];
        props.milestones.forEach(m => {
            allTags = allTags.concat(m.tags);
        });
        this.state = {
            allTags: new Set(allTags),
            tagsFilter: new Set<string>(allTags),
        };
    }

    public render(): JSX.Element {
        const { allTags, tagsFilter } = this.state;
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
        const finalMilestones = completedMilestones.sort(sortMilestones).concat(incompleteMilestones);
        return (
            <div className="milestones">
                <h1>Milestones</h1>
                <div className="milestones--filter">
                    <h2>Filter by tags</h2>
                    <div>
                        {Array.from(allTags).sort().map(t => {
                            return <MilestoneTag
                                className={tagsFilter.has(t) ? "" : "filtered"}
                                onClick={() => {
                                    this.toggleTag(t);
                                }}
                                key={`milestone--filter--${t}`}
                                tag={t}
                            />;
                        })}
                    </div>
                </div>
                <div className="milestones--list">
                    <div className={`milestones--header`}>
                        <div className="milestone--block--title">Item</div>
                        <div className="milestone--block--date">Date</div>
                        <div className="milestone--block--tags">Tags</div>
                    </div>
                    {
                        finalMilestones.map((m, i) => {
                            const next = i === finalMilestones.length - 1 ? null : finalMilestones[i + 1];
                            return <MilestoneBlock
                                key={`milestone--block--${m.title}--${m.date}`}
                                milestone={m}
                                nextMilestone={next}
                            />;
                        })
                    }
                </div>
            </div>
        );
    }

    private toggleTag = (t: string) => {
        const { tagsFilter } = this.state;
        if (tagsFilter.size > 0 && tagsFilter.has(t)) {
            tagsFilter.delete(t);
            this.setState({ tagsFilter });
        } else {
            this.setState({ tagsFilter: tagsFilter.add(t) })
        }
    }

    private showMilestone = (m: Milestone): boolean => {
        const { tagsFilter } = this.state;
        const intersection = new Set([...m.tags].filter(x => tagsFilter.has(x)));
        return intersection.size > 0;
    }
}
