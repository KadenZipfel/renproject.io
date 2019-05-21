import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import ContentBlock from "./ContentBlock";
import { ExternalLink } from "./ExternalLink";
import { RenVMStory } from "./RenVMStory";

class RenVMPage extends React.Component {
    public render(): JSX.Element {
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
                <RenVMStory />
                <Footer />
            </div>
        );
    }
}

export default RenVMPage;
