import * as React from "react";

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
                                    <a className="content--link" href="litepaper.pdf" target="_blank" rel="noopener referrer"><img src={litepaper} />Read the Litepaper</a>
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
