import * as React from "react";

// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ContactItem from "./ContactItem";
import ContentBlock from "./ContentBlock";
// import { ExpandableList } from "./ExpandableList";
import Featured from "./Featured";
import Featurettes from "./Featurettes";
import Footer from "./Footer";
// import GridItem from "./GridItem";
import Header from "./Header";
// import ListItem from "./ListItem";
import { MediumBannerInstance } from "./MediumBanner";
// import { REN_URLS } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";
import { Newsletter } from "./Newsletter";

class HomePage extends React.Component {
    public render(): JSX.Element {
        // const whiteRenLogo = require("../styles/images/logo-white.svg");
        // const renexLogo = require("../styles/images/renex-logo.svg");
        // const techStackImage = require("../styles/images/illustration-tech-stack-2.svg");
        // const codeImage = require("../styles/images/icons/rp-icon-code.svg");
        // const codeImageHover = require("../styles/images/icons/rp-icon-code-hvr.svg");
        return (
            <div className="home">
                <Header />
                {MediumBannerInstance}
                <Featured />
                <div className="section section--cross-chain">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Cross-chain liquidity that's 100x faster than atomic swaps.">
                                    <p>Access tokens from any blockchain using your existing smart contracts without having to worry about wrapping or unwrapping tokens.</p>
                                    <div className="content--buttons">
                                        <ExternalLink href="" className="content--link" >How it works &rarr;</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <Featurettes />
                <div className="section section--token">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Infrastructure for connecting the unconnected">
                                    <p>Using RenVM to expand the capability of existing dApps or create entirely new business cases within the decentralized world.</p>
                                    <div className="content--buttons">
                                        <ExternalLink className="featured--button secondary" href="">Get Started</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--ren">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock title="Darknodes" subtitle="Privacy and interoperability between all blockchains.">
                                    <p>Darknodes all around the world run the applications built on RenVM in complete secrecy. Darknodes are incentivized to work by capturing a percentage of volume transacted through RenVM.</p>
                                    <div className="content--buttons">
                                        <ExternalLink href="" className="content--link" >More about Darknodes &rarr;</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
                {/*
                <div className="section section--renex">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <img className="techstack--img--mobile" src={techStackImage} />
                                <ContentBlock subtitle="A suite of privacy-focused tools for dark pools and other financial applications.">
                                    <ExpandableList items={[
                                        {
                                            title: "Application Layer",
                                            description: <p>Build applications that run in complete secrecy, where no one can reveal the inputs or application state. Utilize our core financial layers to empower your applications to make private transactions and to interoperate between blockchains.</p>,
                                            image: "illustration-application.svg",
                                        },
                                        {
                                            title: "Dark Pool Layer",
                                            description: <p>Any party can setup and deploy their own dark pool exchange utilizing a hidden order book. Traders can open orders, and settle order matches, in secret. Prices and amounts are never revealed.</p>,
                                            image: "illustration-darkpool.svg",
                                        },
                                        {
                                            title: "Interoperability Layer",
                                            description: <p>Instantly execute trustless swaps between blockchains in secret, without hash-time lock contracts. Work with tokens on their native blockchains without the need for trusted third-parties, federations, or centralized exchanges.</p>,
                                            image: "illustration-interoperability.svg",
                                        },
                                        {
                                            title: "Zero Knowledge Transactions",
                                            description: <p>Store and transfer tokens from any blockchain without exposing wallet balances or transaction amounts. Enables sensitive OTC deals and eliminates front-running. Use this tool to build your own completely private settlement layer.</p>,
                                            image: "illustration-zeroknowledge.svg",
                                        },
                                        {
                                            title: "RenVM",
                                            description: <>
                                                <p>RenVM powers the entire ecosystem. It is a general purpose virtual machine allowing anyone to perform private computations in a decentralized network without revealing information to anyone.</p>
                                                <p>Leverage RenVM to build your own unstoppable private application.</p>
                                            </>,
                                            image: "illustration-renvm.svg",
                                        }]} />
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--protocol">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock logo={renexLogo} subtitle="Dark pool trading of digital assets with privacy protecting settlement.">
                                    <p>RenEx is an officially supported dark pool exchange for trading digital assets in secret, built on Ren. Trade now without revealing your orders, free from front-running and counterparty risk.</p>
                                    <div className="content--buttons">
                                        <div>
                                            <ExternalLink className="button" href={REN_URLS.renEx}>Trade on RenEx</ExternalLink>
                                        </div>
                                        <ExternalLink className="content--link" href={`${REN_URLS.zendesk}/hc/en-us/categories/360000458534-Trading-on-RenEx`}>More about RenEx</ExternalLink>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exchanges">
                    <div className="container">
                        <div className="row">
                            <h2 className="exchanges--heading">Find REN on these exchanges</h2>
                            <GridItem type="exchanges" link="https://idex.market" image="idex.png" height={48} />
                            <GridItem type="exchanges" link="https://www.binance.com" image="binance.svg" height={48} brightness={30} />
                            <GridItem type="exchanges" link="https://www.okex.com" image="okex.png" height={61} />
                            <GridItem type="exchanges" link="https://www.hbg.com" image="huobi.png" height={52} />
                            <GridItem type="exchanges" link="https://www.uex.com" image="uex.png" height={50} />
                        </div>
                    </div>
                </div>
                <div className="section section--builders">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Build with Ren.">
                                    <p>Build a Dark Pool or utilize our other privacy preserving layers to create financial applications. Get in touch if you have a project idea you’d like to discuss with the Ren team.</p>
                                    <div className="content--buttons">
                                        <div>
                                            <ExternalLink className="button" href={REN_URLS.github}><FontAwesomeIcon icon={faGithub} pull="left" />Go to Github</ExternalLink>
                                        </div>
                                        <a className="content--link" href="mailto:build@renproject.io">build@renproject.io</a>
                                    </div>
                                </ContentBlock>
                            </div>
                            <div className="section--list">
                                <div className="list">
                                    <ListItem title="Republic-Go &rarr;" description="An official reference implementation of Republic Protocol, written in Go." link="https://github.com/republicprotocol/republic-go" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="Republic-Sol &rarr;" description="An implementation of Republic Protocol smart contracts, written in Solidity." link="https://github.com/republicprotocol/republic-sol" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="RenEx-Sol &rarr;" description="RenEx Ethereum contracts, written in Solidity." link="https://github.com/republicprotocol/renex-sol" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="Co-Go &rarr;" description="A high level concurrency and parallelism library." link="https://github.com/republicprotocol/co-go" image={codeImage} imageHover={codeImageHover} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="renex-banner">
                    <div className="container">
                        <div className="renex-banner--content">
                            <div className="renex-banner--logo">
                                <img src={whiteRenLogo} />
                            </div>
                            <div>
                                <h1>Trade in complete privacy.</h1>
                                <p>RenEx Beta is now live</p>
                            </div>
                        </div>
                        <div className="renex-banner--buttons">
                            <ExternalLink className="button" href={REN_URLS.renEx}>Trade on RenEx</ExternalLink>
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
                */}
                <Footer />
            </div >
        );
    }
}

export default HomePage;
