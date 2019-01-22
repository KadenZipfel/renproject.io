import * as React from "react";

import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactItem from "./ContactItem";
import ContentBlock from "./ContentBlock";
import Footer from "./Footer";
import Header from "./Header";
import { MediumBannerInstance } from "./MediumBanner";
import TeamItem from "./TeamItem";

class AboutPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="about">
                <Header />
                <div className="section section--banner">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Building a fair and private means of exchange for the currency of the future." />
                            </div>
                        </div>
                    </div>
                </div>
                {MediumBannerInstance}
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="In a world where traditional assets are becoming increasingly tokenized, a platform to facilitate their fair and private exchange is essential.">
                                    <div className="content--columns">
                                        <div>
                                            <p>Ren is powered by a decentralized network of Darknodes that use secure multiparty computation to run privacy preserving applications. Using it, we are building hidden order books and privacy preserving settlement layers.</p>
                                        </div>
                                        <div>
                                            <p>Dark pools built on Ren are the first in the history of financial markets that are mathematically provable to be fair.</p>
                                        </div>
                                    </div>
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
                            <TeamItem name="Taiyang Zhang" position="CEO" github="https://github.com/sixteen" linkedin="https://www.linkedin.com/in/taiyangzhang/" medium="https://medium.com/@taiyangzhang" />
                            <TeamItem name="Loong Wang" position="CTO" github="https://github.com/loongy" twitter="https://twitter.com/bzlwang" linkedin="https://www.linkedin.com/in/bzlwang" medium="https://medium.com/@loong" />
                        </div>
                        <div className="row">
                            <TeamItem name="Noah I" position="Blockchain Developer" github="https://github.com/negaex" linkedin="https://www.linkedin.com/in/noahi/" />
                            <TeamItem name="Susruth Nadimpalli" position="Blockchain Developer" github="https://github.com/susruth" linkedin="https://www.linkedin.com/in/susruth-nadimpalli/" />
                            <TeamItem name="Yunshi Sun" position="Software Developer" github="https://github.com/tok-kkk" linkedin="https://www.linkedin.com/in/yunshi-sun" />
                            <TeamItem name="Jaz Gulati" position="Software Developer" github="https://github.com/jazg" linkedin="https://www.linkedin.com/in/jazg/" />
                            <TeamItem name="Divya Mary" position="Software Developer" github="https://github.com/divyakoshy" linkedin="https://www.linkedin.com/in/divya-mary-5a5969104/" />
                            <TeamItem name="Vincent Au" position="Software Developer" github="https://github.com/vinceau" linkedin="https://www.linkedin.com/in/vinceau/" />
                            <TeamItem name="Pfalzgraf Martin" position="Software Developer" github="https://github.com/Skyfold" linkedin="https://www.linkedin.com/in/benjaminpfalzgrafmartin/" />
                            <TeamItem name="Ross Pure" position="Researcher" github="https://github.com/ross-pure" />
                            <TeamItem name="Hugh Greethead" position="Community" linkedin="https://www.linkedin.com/in/hugh-greethead/" />
                            <TeamItem name="Darren Toh" position="Legal &amp; Communications" linkedin="https://www.linkedin.com/in/darren-toh-2a29885/" />
                            <TeamItem name="Michael Burgess" position="Liquidity" linkedin="https://www.linkedin.com/in/michaelwburgess/" />
                            <TeamItem name="Vincent Ward" position="Design" twitter="https://twitter.com/thevward" />
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="container">
                        <h2>The Advisors</h2>
                        <div className="row">
                            <TeamItem name="Dorjee Sun" position="CEO, Perlin Network" linkedin="https://www.linkedin.com/in/dorjee/" />
                            <TeamItem name="Loi Luu" position="CEO, KyberNetwork" linkedin="https://www.linkedin.com/in/loiluu/" />
                            <TeamItem name="John Ng Pangilinan" position="Partner, Signum Capital" linkedin="https://www.linkedin.com/in/johnngp/" />
                            <TeamItem name="Prabhakar Reddy" position="Investor, Accel Partners" linkedin="https://www.linkedin.com/in/prabhakar2reddy/" />
                            <TeamItem name="Anup Malani" position="Economics, University of Chicago" linkedin="https://www.linkedin.com/in/anup-malani-a1551b2/" />
                        </div>
                    </div>
                </div>
                <div className="medium--banner">
                    <div className="container">
                        <div className="banner--content">
                            <p>Updates and news posted through the blog.</p>
                            <a className="button button--alt" href="https://medium.com/republicprotocol"><FontAwesomeIcon icon={faMediumM} pull="left" />Visit the Blog</a>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="container">
                        <ContactItem name="Partnerships" email="partnerships@republicprotocol.com" />
                        <ContactItem name="Community Initiatives" email="community@republicprotocol.com" />
                        <ContactItem name="Technical Support" email="technical@republicprotocol.com" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutPage;
