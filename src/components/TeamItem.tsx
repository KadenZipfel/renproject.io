import * as React from "react";

import { faGithub, faLinkedin, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "./ExternalLink";

interface TeamItemProps {
    name: string;
    position: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    medium?: string;
}

interface TeamItemState {
}

class TeamItem extends React.Component<TeamItemProps, TeamItemState> {
    public render(): JSX.Element {
        const { name, position, github, twitter, linkedin, medium } = this.props;
        return (
            <div className="team--item">
                <h4>{name}</h4>
                <p>{position}</p>
                <ul className="team--links">
                    {github &&
                        <li><ExternalLink href={`https://github.com/${github}`} doNotTrack={true}><FontAwesomeIcon icon={faGithub} /></ExternalLink></li>
                    }
                    {twitter &&
                        <li><ExternalLink href={`https://twitter.com/${twitter}`} doNotTrack={true}><FontAwesomeIcon icon={faTwitter} /></ExternalLink></li>
                    }
                    {linkedin &&
                        <li><ExternalLink href={`https://www.linkedin.com/in/${linkedin}`} doNotTrack={true}><FontAwesomeIcon icon={faLinkedin} /></ExternalLink></li>
                    }
                    {medium &&
                        <li><ExternalLink href={`https://medium.com/${medium}`} doNotTrack={true}><FontAwesomeIcon icon={faMediumM} /></ExternalLink></li>
                    }
                </ul>
            </div>
        );
    }
}

export default TeamItem;
