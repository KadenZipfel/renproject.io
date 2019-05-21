import * as React from "react";
import { Milestone } from "../lib/milestone";

interface MilestoneBlockProps {
    milestone: Milestone;
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
        return (
            <div className={`milestone--block--container ${open ? "open" : ""}`}>
                <div className={`milestone--block ${achieved ? "achieved" : ""}`}
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
