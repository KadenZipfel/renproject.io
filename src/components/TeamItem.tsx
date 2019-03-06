import * as React from "react";

import { faGithub, faLinkedin, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                        <li><a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    }
                    {twitter &&
                        <li><a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    }
                    {linkedin &&
                        <li><a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    }
                    {medium &&
                        <li><a href={`https://medium.com/${medium}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMediumM} /></a></li>
                    }
                </ul>
            </div>
        );
    }
}

export default TeamItem;
