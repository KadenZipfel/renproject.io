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
                                <li><a href="https://t.me/renprojectann" target="_blank" rel="noopener noreferrer">Telegram Announcements</a></li>
                                <li><a href="https://t.me/renproject" target="_blank" rel="noopener noreferrer">Telegram Community (EN)</a></li>
                                <li><a href="https://t.me/renkorea" target="_blank" rel="noopener noreferrer">Telegram Community (KR)</a></li>
                                <li><a href="https://republicprotocol.zendesk.com" target="_blank" rel="noopener noreferrer">Help</a></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Developers</p>
                            <ul>
                                <li><a href="https://github.com/renproject" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                {/* <li><a href="#">Documentation</a></li> */}
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Blog</p>
                            <ul>
                                <li><a href="https://medium.com/renproject" target="_blank" rel="noopener noreferrer">Medium</a></li>
                            </ul>
                        </div>
                        <div className="footer--links">
                            <p>Ren</p>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><a href="whitepaper_1.0.0.pdf" target="_blank" rel="noopener referrer">Whitepaper</a></li>
                                <li><a href="litepaper.pdf" target="_blank" rel="noopener referrer">Litepaper</a></li>
                                {/* <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <div className="container">
                        <p>Copyright &copy; 2018 Ren.</p>
                        {CopySocial}
                    </div>
                </div>
            </>
        );
    }
}

export const CopySocial = <ul className="copy--social">
    <li><a title="Facebook" href="https://facebook.com/renproject" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
    <li><a title="Twitter" href={REN_URLS.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
    <li><a title="Github" href="https://github.com/renproject" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
    <li><a title="Telegram" href="https://t.me/renproject" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
    <li><a title="Reddit" href="https://www.reddit.com/r/renproject" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faRedditAlien} /></a></li>
</ul>;

export default Footer;
