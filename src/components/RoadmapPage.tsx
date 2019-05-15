import * as React from "react";

import ContentBlock from "./ContentBlock";
import Footer from "./Footer";
import Header from "./Header";
import { MediumBannerInstance } from "./MediumBanner";
import { GithubStats } from "./GithubStats";

class RoadmapPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="roadmap">
                <Header />
                <div className="section section--banner">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Powering the free movement of value between blockchains in zero-knowledge." />
                            </div>
                        </div>
                    </div>
                </div>
                {MediumBannerInstance}
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
                            <GithubStats usernames={["renproject", "republicprotocol"]} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RoadmapPage;
