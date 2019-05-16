import * as React from "react";

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
                    <div className="container" />
                </div>
                {MediumBannerInstance}
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
                            <GithubStats limit={6} usernames={["renproject", "republicprotocol"]} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RoadmapPage;
