import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import { MediumBannerInstance } from "./MediumBanner";
import { GithubStats } from "./GithubStats";
import ContentBlock from "./ContentBlock";
import { REN_URLS } from "../lib/constants";
import { TelegramSelector } from "./TelegramSelector";

class RoadmapPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="roadmap">
                <Header />
                <div className="section section--banner">
                    <div className="container" />
                </div>
                {MediumBannerInstance}
                <div className="section section--ecosystem">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="A growing ecosystem">
                                    <p>We're dedicated to developing world class privacy and interoperability focused tools and keeping you up-to-date on our progress. Because the blockchain space is constantly evolving, certain features or decisions may change over time.</p>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
                            <GithubStats limit={6} usernames={["renproject", "republicprotocol"]} />
                        </div>
                    </div>
                </div>
                <div className="telegram--banner">
                    <div className="container">
                        <div className="banner--content">
                            <div>
                                <h2>Have your say.</h2>
                                <p>Provide input and feedback through our Telegram channel</p>
                            </div>
                            <TelegramSelector links={[
                                { name: "Telegram Community (EN)", url: REN_URLS.telegram },
                                { name: "Telegram Community (KR)", url: REN_URLS.telegramKorea },
                                { name: "Telegram Announcements", url: REN_URLS.telegramAnnouncements },
                                ]}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RoadmapPage;
