import * as React from "react";

import { ExternalLink } from "./ExternalLink";
import { REN_URLS } from "../lib/constants";

export const RenVMStory = () => {
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
            </div>
        </div>
    );
}
