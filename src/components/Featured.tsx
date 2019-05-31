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
    return <ExternalLink className={`featured--button ${props.className ? props.className : ""}`} title={props.title} href={props.href}>{props.children && <span className="button--icon">{props.children}</span>}{props.title}</ExternalLink>;
};

class Featured extends React.Component<FeaturedProps, FeaturedState> {
    public render(): JSX.Element {
        return (
            <div className="section featured">
                <div className="container">
                    <div className="row">
                        <div className="featured--content">
                            <ContentBlock subtitle="Liquidity, unchained.">
                                <p>The first and only open protocol that provides access to inter-blockchain liquidity for all decentralized applications.</p>

                                <div className="featured--buttons">
                                    {/* <FeaturedButton className="primary" href="" title="Learn More"></FeaturedButton> */}
                                    <FeaturedButton className="primary" href="" title="Get Started"></FeaturedButton>
                                    <div className="social--links">
                                        <ExternalLink className="social" href={REN_URLS.twitter}><span className="social--icon"><FontAwesomeIcon icon={faTwitter} /></span>Follow us on Twitter</ExternalLink>
                                        <ExternalLink className="social" href={REN_URLS.reddit}><span className="social--icon"><FontAwesomeIcon icon={faRedditAlien} /></span>Subscribe on Reddit</ExternalLink>
                                    </div>
                                </div>
                            </ContentBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
