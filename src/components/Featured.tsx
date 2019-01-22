import * as React from "react";

import ContentBlock from "./ContentBlock";

interface FeaturedProps {
    title?: string;
}

interface FeaturedState {
}

class Featured extends React.Component<FeaturedProps, FeaturedState> {
    public render(): JSX.Element {
        return (
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="featured--content">
                            <ContentBlock subtitle="Unstoppable Privacy">
                                <p>Transfer tokens in zero-knowledge, trustlessly swap between blockchains, trade on a dark pool, build any privacy preserving application. Never reveal anything.</p>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
