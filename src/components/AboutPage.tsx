import * as React from "react";

import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ContactItem from "./ContactItem";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";
import Header from "./Header";
import { MediumBannerInstance } from "./MediumBanner";
import TeamItem from "./TeamItem";
import { REN_URLS } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";

class AboutPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="about">
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
                            <div className="section--content">
                                <ContentBlock subtitle="Working towards a private and interoperable world of decentralized finance.">
                                    <p>Ren allows the free movement of value between all blockchains and transfer of tokens in zero-knowledge. Unlocking new liquidity and resources to power a new wave of value in the open finance movement.</p>
                                    <p>With Ren all decentralized applications can run in secret, preserving the privacy of all users and data.</p>
                                    <ExternalLink className={`featured--button primary`}>RenVM Overview</ExternalLink>
                                    <ExternalLink className={`featured--button secondary`}>Get in touch</ExternalLink>
                                </ContentBlock>
                            </div>
                            {/* <div className="section--stats">
                                <h1>30-40%</h1>
                                <p>of traditional stock is traded on dark pools in the US<sup>1</sup>.</p>
                                <h1>$8.8 billion USD</h1>
                                <p>traded in cryptocurrency daily<sup>2</sup>.</p>
                                <ul className="section--footnotes">
                                    <li>1 &nbsp; Financial Industry Regulatory Authority, 2014</li>
                                    <li>2 &nbsp; CoinMarketCap, 2018</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="container">
                        <h2>The Team</h2>
                        <div className="row">
                            <TeamItem name="Taiyang Zhang" position="CEO" github="sixteen" linkedin="taiyangzhang" medium="@taiyangzhang" />
                            <TeamItem name="Loong Wang" position="CTO" github="loongy" twitter="bzlwang" linkedin="bzlwang" medium="@loong" />
                        </div>
                        <div className="row">
                            <TeamItem name="Noah I" position="Blockchain Developer" github="negaex" linkedin="noahi" />
                            <TeamItem name="Susruth Nadimpalli" position="Blockchain Developer" github="susruth" linkedin="susruth-nadimpalli" />
                            <TeamItem name="Yunshi Sun" position="Software Developer" github="tok-kkk" linkedin="yunshi-sun" />
                            <TeamItem name="Jaz Gulati" position="Software Developer" github="jazg" linkedin="jazg" />
                            <TeamItem name="Divya Mary" position="Software Developer" github="divyakoshy" linkedin="divya-mary-5a5969104" />
                            <TeamItem name="Vincent Au" position="Software Developer" github="vinceau" linkedin="vinceau" />
                            <TeamItem name="Ross Pure" position="Researcher" github="ross-pure" />
                            <TeamItem name="Hugh Greethead" position="Community" linkedin="hugh-greethead" />
                            <TeamItem name="Darren Toh" position="Legal &amp; Communications" linkedin="darren-toh-2a29885" />
                            <TeamItem name="Michael Burgess" position="Liquidity" linkedin="michaelwburgess" />
                            <TeamItem name="Vincent Ward" position="Design" twitter="thevward" />
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="container">
                        <h2>The Advisors</h2>
                        <div className="row">
                            <TeamItem name="Dorjee Sun" position="CEO, Perlin Network" linkedin="dorjee" />
                            <TeamItem name="Loi Luu" position="CEO, KyberNetwork" linkedin="loiluu" />
                            <TeamItem name="John Ng Pangilinan" position="Partner, Signum Capital" linkedin="johnngp" />
                            <TeamItem name="Prabhakar Reddy" position="Investor, Accel Partners" linkedin="prabhakar2reddy" />
                            <TeamItem name="Anup Malani" position="Economics, University of Chicago" linkedin="anup-malani-a1551b2" />
                        </div>
                    </div>
                </div>
                <div className="medium--banner">
                    <div className="container">
                        <div className="banner--content">
                            <p>Stay up to date with updates and news posted through the blog.</p>
                            <a className="button button--alt" href={REN_URLS.medium}><FontAwesomeIcon icon={faMediumM} pull="left" />Visit the Blog</a>
                        </div>
                    </div>
                </div>
                {/*<div className="contact">
                    <div className="container">
                        <ContactItem name="Partnerships" email="partnerships@republicprotocol.com" />
                        <ContactItem name="Community Initiatives" email="community@republicprotocol.com" />
                        <ContactItem name="Technical Support" email="technical@republicprotocol.com" />
                    </div>
                </div>*/}
                <Footer />
            </div>
        );
    }
}

export default AboutPage;
