import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

import ContentBlock from "./ContentBlock";
import { REN_URLS } from "../lib/constants";
import { CopySocial } from "./Footer";
import { ExternalLink } from "./ExternalLink";

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
                                <div className="bottom--links">
                                    <ExternalLink className="content--link litepaper" href="litepaper.pdf"><img src={litepaper} />Read the Litepaper</ExternalLink>
                                    <ExternalLink className="content--link social twitter" href={REN_URLS.twitter}><span className="social--icon"><FontAwesomeIcon icon={faTwitter} /></span><span className="social--text">Follow us on Twitter</span></ExternalLink>
                                    <ExternalLink className="content--link social reddit" href={REN_URLS.reddit}><span className="social--icon"><FontAwesomeIcon icon={faRedditAlien} /></span><span className="social--text">Follow us on Reddit</span></ExternalLink>
                                    <CopySocial />
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
