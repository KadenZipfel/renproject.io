import * as React from "react";
import { Milestone } from "../lib/milestone";

interface MilestoneBlockProps {
    milestone: Milestone;
    nextMilestone?: Milestone | null;
}

interface MilestoneBlockState {
    open: boolean;
}

export const MilestoneTag = (props: { tag: string, onClick?: () => void, className?: string }) => {
    return <span
        className={`milestone--block--tag ${props.tag} ${props.className ? props.className : ""}`}
        onClick={props.onClick ? props.onClick : undefined}
    >
        {props.tag}
    </span>;
};

export class MilestoneBlock extends React.Component<MilestoneBlockProps, MilestoneBlockState> {
    public constructor(props: MilestoneBlockProps) {
        super(props);
        this.state = {
            open: false,
        }
    }

    public render(): JSX.Element {
        const { open } = this.state;
        const { title, description, date, tags, achieved } = this.props.milestone;
        const nextAchieved = this.props.nextMilestone && this.props.nextMilestone.achieved;
        return (
            <div className={`milestone--block--container${achieved ? " achieved" : ""}${open ? " open" : ""}${nextAchieved ? " next-achieved" : ""}`}>
                <div className={`milestone--block`}
                    onClick={() => {
                        this.toggle();
                    }}
                >
                    <div className="milestone--block--title">{title}</div>
                    <div className="milestone--block--date">{date ? new Date(date).toLocaleDateString() : "-"}</div>
                    <div className="milestone--block--tags">
                        {tags.map(t => <MilestoneTag key={`${title}--${t}`} tag={t} />)}
                    </div>
                </div>
                <div className={`milestone--block--footer`}>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    private toggle = () => {
        this.setState({ open: !this.state.open });
    }
}
