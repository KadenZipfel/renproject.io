import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

import ContentBlock from "./ContentBlock";
import { REN_URLS } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";

interface FeaturedProps {
    title?: string;
}

interface FeaturedState {
}

interface FeaturedButtonProps extends Readonly<{ children?: React.ReactNode }> {
    href: string;
    title: string;
    className?: string;
}

const FeaturedButton = (props: FeaturedButtonProps) => {
    return <ExternalLink className={`featured--button ${props.className ? props.className : ""}`} title={props.title} href={props.href}>{props.title}{props.children && <span className="button--icon">{props.children}</span>}</ExternalLink>;
};

class Featured extends React.Component<FeaturedProps, FeaturedState> {
    public render(): JSX.Element {
        const litepaper = require("../styles/images/icons/icon-litepaper-alt.svg");
        return (
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="featured--content">
                            <ContentBlock subtitle="RenVM, a trustless &amp; decentralized virtual machine.">
                                <p>Secure multi-party computations power a privacy layer for decentralized applications, enabling private and interoperable lending, exchanges, collateralization &amp; more.</p>
                                <div className="social--links">
                                    <FeaturedButton className="social" href={REN_URLS.twitter} title="Follow us on Twitter"><FontAwesomeIcon icon={faTwitter} /></FeaturedButton>
                                    <FeaturedButton className="social" href={REN_URLS.reddit} title="Follow us on Reddit"><FontAwesomeIcon icon={faRedditAlien} /></FeaturedButton>
                                </div>
                                <FeaturedButton href="litepaper.pdf" title="Read the Litepaper"><img src={litepaper} /></FeaturedButton>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
