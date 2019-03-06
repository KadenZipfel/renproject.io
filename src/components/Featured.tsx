import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import ContentBlock from "./ContentBlock";

interface FeaturedProps {
    title?: string;
}

interface FeaturedState {
}

class Featured extends React.Component<FeaturedProps, FeaturedState> {
    public render(): JSX.Element {
        const litepaper = require("../styles/images/icons/icon-litepaper.svg");
        return (
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="featured--content">
                            <ContentBlock subtitle="Unstoppable Privacy">
                                <p>Transfer tokens in zero-knowledge, trustlessly swap between blockchains, trade on a dark pool, build any privacy preserving application. Never reveal anything.</p>
                                <div className="content--links">
                                    <a className="content--link litepaper" href="litepaper.pdf" target="_blank" rel="noopener referrer"><img src={litepaper} />Read the Litepaper</a>
                                    <a className="content--link twitter" href="https://twitter.com/renprotocol" target="_blank" rel="noopener referrer"><span className="twitter--icon"><FontAwesomeIcon icon={faTwitter} /></span><span className="twitter--text">Follow us on Twitter</span></a>
                                </div>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
