import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import { MediumBannerInstance } from "./MediumBanner";
import { GithubStats } from "./GithubStats";
import ContentBlock from "./ContentBlock";
import { REN_URLS } from "../lib/constants";
import { TelegramSelector } from "./TelegramSelector";
import { Milestones } from "./Milestones";
import { getMilestones } from "../lib/milestone";

const Fade = require("react-reveal/Fade");

export const RoadmapPage = () => {
    const speechIcon = require(`../styles/images/icons/icon-speech.svg`);
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
                            <ContentBlock subtitle="A Growing Ecosystem">
                                <p>We're dedicated to developing world class privacy and interoperability focused tools as well as keeping you up-to-date on our progress.</p>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
            <Fade up distance="50px" delay={100}>
                <div className="section section--github">
                    <div className="container">
                        <div className="row">
                            <GithubStats limit={6} usernames={["renproject", "republicprotocol"]} />
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade up distance="50px" delay={100}>
                <div className="section section--milestones">
                    <div className="container">
                        <div className="row">
                            <Milestones milestones={getMilestones()} />
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="telegram--banner">
                <div className="container">
                    <div className="banner--content">
                        <div>
                            <h2>Have your say<img src={speechIcon} /></h2>
                            <p>Provide input and feedback through our Telegram channel</p>
                        </div>
                        <TelegramSelector links={[
                            { name: "Telegram Community", url: REN_URLS.telegram },
                            { name: "Telegram Announcements", url: REN_URLS.telegramAnnouncements },
                        ]} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoadmapPage;
