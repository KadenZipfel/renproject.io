import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import ContentBlock from "./ContentBlock";
import { ExternalLink } from "./ExternalLink";
import { RenVMStory } from "./RenVMStory";

class RenVMPage extends React.Component {
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
                                        <ExternalLink className="featured--button primary" href="">Keep reading &darr;</ExternalLink>
                                        <ExternalLink className="featured--button secondary" href="">Try RenEx, powered by RenVM</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
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
                <Footer />
            </div>
        );
    }
}

export default RenVMPage;
