import * as React from "react";

import { faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Milestone } from "../lib/milestone";
import { ExternalLink } from "./ExternalLink";

interface MilestoneBlockProps {
    milestone: Milestone;
    nextMilestone?: Milestone | null;
}

interface MilestoneBlockState {
    open: boolean;
}

const milestoneLink = (platform: string) => {
    switch(platform){
        case "github":
            return <><FontAwesomeIcon icon={faGithub} pull="left" /><span>View repo</span></>;
        case "medium":
            return <><FontAwesomeIcon icon={faMediumM} pull="left" /><span>Read more</span></>;
        default:
            return <span />
    }
};


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
        const { title, links, description, date, tags, achieved } = this.props.milestone;
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
                    {links && links.length > 0 && <div>
                        {links.map((l) => (
                            <ExternalLink key={`${l.platform}--${l.url}`} href={l.url} className={`milestone--link ${l.platform}`}>
                                {milestoneLink(l.platform)}
                            </ExternalLink>
                        ))}
                    </div>}
                </div>
            </div>
        );
    }

    private toggle = () => {
        this.setState({ open: !this.state.open });
    }
}
