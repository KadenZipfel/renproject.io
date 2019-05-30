import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import ContentBlock from "./ContentBlock";
import { ExternalLink } from "./ExternalLink";
import { RenVMStory } from "./RenVMStory";
import { REN_URLS } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

const Fade = require("react-reveal/Fade");

class RenVMPage extends React.Component {
    private renvmStoryRef = React.createRef<HTMLDivElement>();

    public render(): JSX.Element {
        const story = require("../styles/images/renvm-story.png");
        return (
            <div className="renvm">
                <Header />
                <div className="section section--renvm">
                    <div className="container">
                        <div className="row">
                            <div className="featured--content">
                                <ContentBlock subtitle="RenVM, a trustless &amp; decentralized virtual machine.">
                                    <p>Secure multi-party computations power a privacy layer for decentralized applications, enabling private and interoperable lending, exchanges, collateralization &amp; more.</p>

                                    <div className="featured--buttons">
                                        <a onClick={this.scrollToStory} className="featured--button primary">Keep reading &darr;</a>
                                        <ExternalLink className="featured--button secondary" href="">Try RenEx, powered by RenVM</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--features">
                    <div className="container">
                        <div className="row">
                            <Fade up distance="50px" delay={100}>
                                <div>
                                    <h2>Shamir's Secret Sharing</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                                <div>
                                    <h2>Secure multiparty Computation (sMPC)</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                                <div>
                                    <h2>Zero Knowledge</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                                <div>
                                    <h2>Byzantine Fault Tolerance</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                                <div>
                                    <h2>Hyperdrive</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                                <div>
                                    <h2>xxxx</h2>
                                    <p>Integrate Warpgate and allow any decentralized exchange to settle any cross-blockchain cryptocurrency.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="section section--story">
                    <div className="container">
                        <div className="row" ref={this.renvmStoryRef}>
                            <RenVMStory />
                            <div className="story--sidebar">
                                <div className="story--sidebar--buttons">
                                    <div className="story--in-action">
                                        <h2>Want to see it in action?</h2>
                                        <ExternalLink className="featured--button primary" href="">View the demo</ExternalLink>
                                    </div>
                                    <div>
                                        <h2>Ready to start building?</h2>
                                        <ExternalLink className="featured--button primary" href="">View the Docs</ExternalLink>
                                    </div>
                                </div>
                                <div>
                                    <img src={story} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="renvm--build--banner">
                    <div className="ready--to--start">
                        <h2>Ready to start building on RenVM?</h2>
                        <ExternalLink className="button">View docs &rarr;</ExternalLink>
                    </div>
                    <div className="get--in--touch">
                        <p><span>Want to discuss a project? Get in touch:</span> <ExternalLink href="mailto:build@renproject.io">build@renproject.io</ExternalLink></p>
                    </div>
                    <div className="social--links">
                        <ExternalLink className="social" href={REN_URLS.twitter}><span className="social--icon"><FontAwesomeIcon icon={faTwitter} /></span>Follow us on Twitter</ExternalLink>
                        <ExternalLink className="social" href={REN_URLS.reddit}><span className="social--icon"><FontAwesomeIcon icon={faRedditAlien} /></span>Follow us on Reddit</ExternalLink>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    private scrollToStory = () => {
        if (this.renvmStoryRef.current) {
            this.renvmStoryRef.current.scrollIntoView();
        }
    }
}

export default RenVMPage;
