import * as React from "react";

import { faFacebookF, faGithub, faRedditAlien, faTelegramPlane, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { REN_URLS } from "../lib/constants";
import {ExternalLink} from "./ExternalLink";

class Footer extends React.Component {
    public render(): JSX.Element {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <NavLink to="/">
                            <div className="footer--logo" />
                        </NavLink>
                        <div className="footer--links">
                            <p>Community</p>
                            <ul>
                                <li><ExternalLink href={REN_URLS.telegramAnnouncements}>Telegram Announcements</ExternalLink></li>
                                <li><ExternalLink href={REN_URLS.telegram}>Telegram Community (EN)</ExternalLink></li>
                                <li><ExternalLink href={REN_URLS.telegramKorea}>Telegram Community (KR)</ExternalLink></li>
                                <li><ExternalLink href={REN_URLS.gitbook}>Help</ExternalLink></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Developers</p>
                            <ul>
                                <li><ExternalLink href={REN_URLS.github}>GitHub</ExternalLink></li>
                                {/* <li><a href="#">Documentation</a></li> */}
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Blog</p>
                            <ul>
                                <li><ExternalLink href={REN_URLS.medium}>Medium</ExternalLink></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Ren</p>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><ExternalLink href="whitepaper_1.0.0.pdf">Whitepaper (2017)</ExternalLink></li>
                                <li><ExternalLink href="litepaper.pdf">Litepaper (2019)</ExternalLink></li>
                                {/* <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <div className="container">
                        <p>Copyright &copy; 2018 Ren.</p>
                        <CopySocial />
                    </div>
                </div>
            </>
        );
    }
}

export const CopySocial = () => {
    return (
        <ul className="copy--social">
            <li><ExternalLink title="Facebook" href={REN_URLS.facebook}><FontAwesomeIcon icon={faFacebookF} /></ExternalLink></li>
            <li><ExternalLink title="Twitter" href={REN_URLS.twitter}><FontAwesomeIcon icon={faTwitter} /></ExternalLink></li>
            <li><ExternalLink title="Github" href={REN_URLS.github}><FontAwesomeIcon icon={faGithub} /></ExternalLink></li>
            <li><ExternalLink title="Telegram" href={REN_URLS.telegram}><FontAwesomeIcon icon={faTelegramPlane} /></ExternalLink></li>
            <li><ExternalLink title="Reddit" href={REN_URLS.reddit}><FontAwesomeIcon icon={faRedditAlien} /></ExternalLink></li>
        </ul>
    );
};

export default Footer;
