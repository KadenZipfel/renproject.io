import * as React from "react";
import { Milestone } from "../lib/milestone";

interface MilestoneBlockProps {
    milestone: Milestone;
}

interface MilestoneBlockState {
    open: boolean;
}

export const MilestoneTag = (props: { tag: string }) => (
    <span className={`milestone--block--tag ${props.tag}`}>{props.tag}</span>
);

export class MilestoneBlock extends React.Component<MilestoneBlockProps, MilestoneBlockState> {
    public constructor(props: MilestoneBlockProps) {
        super(props);
        this.state = {
            open: false,
        }
    }

    public render(): JSX.Element {
        const { title, date, tags } = this.props.milestone;
        return (
            <div className="milestone--block">
                <div className="milestone--block--title">{title}</div>
                <div className="milestone--block--date">{date ? new Date(date).toLocaleDateString() : "-"}</div>
                <div className="milestone--block--tags">
                    {tags.map(t => <MilestoneTag key={`${title}--${t}`} tag={t} />)}
                </div>
                <div className="milestone--block--title">{title}</div>
            </div>
        );
    }
}
