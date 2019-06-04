import * as React from "react";

import { faGithub, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ExternalLink } from "./ExternalLink";
import { REN_URLS } from "../lib/constants";

export const RenVMStory = () => {
    const docsImage = require("../styles/images/icons/icon-docs.svg");
    return (
        <div className="renvm--story--container">
            <div className="renvm--story">
                <h1>What is RenVM?</h1>
                <h2>RenVM serves as the engine that powers Ren.</h2>
                <p>Using a new secure multiparty computation algorithm, RenVM provides one of the only practical privacy + interoperability solutions that can scale, and is the only solution that allows for private computation over multiple inputs and multiple parties. </p>
                <h1>What problem does it solve?</h1>
                <h2>For many decentralized applications, in particular decentralized finance, solutions for privacy and interoperability are fundamental pieces of the puzzle that are still missing.</h2>
                <p>Trustless privacy and interoperability is absolutely necessary for achieving truly decentralized applications that are secure, usable, and liquid. Dark pools, DEXs, leverage, lending, collateralization, transferring digital assets and many other use cases are now made private, interoperable, and practical through RenVM.</p>
                <h1>What can be built with RenVM?</h1>
                <h2>RenVM serves as an plug-in for decentralized finance and therefore, any DeFi application can incorporate RenVM’s capabilities into their applications and existing smart contracts.</h2>
                <p>If your project would benefit from cross-chain liquidity, then you stand to benefit from integrating with RenVM.</p>
                <div className="dev--resources">
                    <h3>Developer resources</h3>
                    <p>Take a look at these developer resources for specifics on how RenVM operates.</p>
                    <div>
                        <ExternalLink><img className="docs--icon" src={docsImage} /><span>Documentation</span></ExternalLink>
                        <ExternalLink><span><FontAwesomeIcon icon={faGithub} pull="left" />Github</span></ExternalLink>
                        <ExternalLink><span><FontAwesomeIcon icon={faTelegramPlane} pull="left" />Telegram Community</span></ExternalLink>
                    </div>
                </div>
            </div>
            <div className="story--sidebar--container">
                <div className="story--sidebar">
                    <div className="story--sidebar--buttons">
                        <div>
                            <h2>Want to integrate RenVM?</h2>
                            <p>Sign up here and we'll let you know when it's ready!</p>
                            <ExternalLink className="featured--button primary" href="">Sign Up</ExternalLink>
                        </div>
                    </div>
                    <div className="story--sidebar--footer">
                        <h2>More questions?</h2>
                        <ExternalLink className="featured--button secondary" href={REN_URLS.gitbook}><img src={docsImage} />Read the Docs</ExternalLink>
                        <div className="email--link">Or, <ExternalLink href="mailto:help@renproject.io">email the team</ExternalLink></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
