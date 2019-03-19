import * as React from "react";

import { faFacebookF, faGithub, faRedditAlien, faTelegramPlane, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import { REN_URLS } from "../lib/constants";

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
                                <li><a href={REN_URLS.telegramAnnouncements} target="_blank" rel="noopener noreferrer">Telegram Announcements</a></li>
                                <li><a href={REN_URLS.telegram} target="_blank" rel="noopener noreferrer">Telegram Community (EN)</a></li>
                                <li><a href={REN_URLS.telegramKorea} target="_blank" rel="noopener noreferrer">Telegram Community (KR)</a></li>
                                <li><a href={REN_URLS.zendesk} target="_blank" rel="noopener noreferrer">Help</a></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Developers</p>
                            <ul>
                                <li><a href={REN_URLS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                {/* <li><a href="#">Documentation</a></li> */}
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Blog</p>
                            <ul>
                                <li><a href={REN_URLS.medium} target="_blank" rel="noopener noreferrer">Medium</a></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Ren</p>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><a href="whitepaper_1.0.0.pdf" target="_blank" rel="noopener referrer">Whitepaper (2017)</a></li>
                                <li><a href="litepaper.pdf" target="_blank" rel="noopener referrer">Litepaper (2019)</a></li>
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
            <li><a title="Facebook" href={REN_URLS.facebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a title="Twitter" href={REN_URLS.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a title="Github" href={REN_URLS.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a title="Telegram" href={REN_URLS.telegram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
            <li><a title="Reddit" href={REN_URLS.reddit} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faRedditAlien} /></a></li>
        </ul>
    );
};

export default Footer;
