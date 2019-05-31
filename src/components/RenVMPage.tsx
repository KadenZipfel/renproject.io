import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import ContentBlock from "./ContentBlock";
import { RenVMStory } from "./RenVMStory";
import { MediumBannerInstance } from "./MediumBanner";
import { OverviewBlock } from "./OverviewBlock";

const Fade = require("react-reveal/Fade");

class RenVMPage extends React.Component {
    private renvmStoryRef = React.createRef<HTMLDivElement>();

    public render(): JSX.Element {
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
                            </Fade>
                            <div ref={this.renvmStoryRef}>
                                <RenVMStory />
                            </div>
                        </div>
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
