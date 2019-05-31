import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

import Footer from "./Footer";
import Header from "./Header";
import ContentBlock from "./ContentBlock";
import { ExternalLink } from "./ExternalLink";
import { RenVMStory } from "./RenVMStory";
import { REN_URLS } from "../lib/constants";
import { MediumBannerInstance } from "./MediumBanner";
import { OverviewBlock } from "./OverviewBlock";

const Fade = require("react-reveal/Fade");

class RenVMPage extends React.Component {
    private renvmStoryRef = React.createRef<HTMLDivElement>();

    public render(): JSX.Element {
        const story = require("../styles/images/renvm-story.png");
        const bftIcon = require("../styles/images/icons/icon-renvm-bft.svg");
        const hyperdriveIcon = require("../styles/images/icons/icon-renvm-hyperdrive.svg");
        const shamirIcon = require("../styles/images/icons/icon-renvm-shamir.svg");
        const smpcIcon = require("../styles/images/icons/icon-renvm-smpc.svg");
        return (
            <div className="renvm">
                <Header />
                <div className="section section--renvm">
                    <div className="container">
                        <div className="row">
                            <div className="featured--content">
                                <ContentBlock subtitle={<>RenVM, a trustless &amp;<br />decentralized virtual machine.</>}>
                                    <p>Secure multi-party computations power a privacy layer for decentralized applications, enabling private and interoperable lending, exchanges, collateralization &amp; more.</p>

                                    <div className="featured--buttons">
                                        <a onClick={this.scrollToStory} className="featured--button primary">Keep reading &darr;</a>
                                        {/* <ExternalLink className="featured--button secondary" href="">Try RenEx, powered by RenVM</ExternalLink> */}
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                {MediumBannerInstance}
                <div className="section section--features">
                    <div className="container">
                        <div className="row">
                            <Fade up distance="50px" delay={100}>
                                <div>
                                    <h1>Overview</h1>
                                    <div className="overview--features row">
                                        <OverviewBlock
                                            image={shamirIcon}
                                            title="Shamir's Secret Sharing"
                                            subtitle="The foundation to how RenVM keeps your data secret"
                                            description="The premise is simple: a secret is divided into multiple shares, with participants in the secret sharing scheme needing a majority of the  parts to be able to reconstruct the secret."
                                        />
                                        <OverviewBlock
                                            image={smpcIcon}
                                            title="Secure multiparty Computation (sMPC)"
                                            subtitle="How RenVM efficiently runs secret scripts"
                                            description="We have pioneered our own state-of-the-art sMPC algorithm that allows untrusted Darknodes to jointly run scripts without revealing the inputs or outputs of the script to anyone, not even to the machines powering RenVM. "
                                        />
                                        <OverviewBlock
                                            image={bftIcon}
                                            title="Byzantine Fault Tolerance"
                                            subtitle="Uptime in a dynamic &amp; potentially malicious environment "
                                            description="Our network thrives even if Darknodes become unavailable or behave maliciously. Scripts keep running, and secrets stay secret "
                                        />
                                        <OverviewBlock
                                            image={hyperdriveIcon}
                                            title="Hyperdrive"
                                            subtitle="Fast decentralized consensus"
                                            description="RenVM uses a modified version of the Tendermint consensus algorithm designed specifically for sharding and sMPC."
                                        />
                                    </div>
                                </div>
                                <div ref={this.renvmStoryRef}>
                                    <RenVMStory />
                                </div>
                                <div className="story--sidebar">
                                    <div className="story--sidebar--buttons">
                                        <div className="story--in-action">
                                            <h2>Want to see it in action?</h2>
                                            <ExternalLink className="featured--button primary" href="">View the demo</ExternalLink>
                                        </div>
                                        <div>
                                            <h2>Ready to start building?</h2>
                                            <ExternalLink className="featured--button primary" href={REN_URLS.gitbook}>View the Docs</ExternalLink>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={story} />
                                    </div>
                                </div>
                            </Fade>
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
