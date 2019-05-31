import * as React from "react";

import { ExternalLink } from "./ExternalLink";
import { CopySocial } from "./Footer";

interface RenVMStoryProps {
}

interface RenVMStoryState {
    postText: string;
    tocHidden: boolean;
}

const flatten = (text: any, child: any): any => (
    typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text)
);

export class RenVMStory extends React.Component<RenVMStoryProps, RenVMStoryState> {
    // private storyRef: HTMLDivElement | null = null;
    private tocRef: HTMLDivElement | null = null;

    constructor(props: RenVMStoryProps) {
        super(props);
        this.state = {
            postText: "",
            tocHidden: true,
        };
    }

    public componentWillMount() {
        document.addEventListener("mousedown", this.handleClick, false);
    }

    public componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false);
    }

    public render(): JSX.Element {
        const { tocHidden } = this.state;
        const helpIcon = require("../styles/images/icons/looking-for-help-icon.svg");
        return (
            <div>
                <div className="renvm--story">
                    <h1>What is RenVM?</h1>
                    <h2>RenVM serves as the engine that powers Ren.</h2>
                    <p>Using a new secure multiparty computation algorithm, RenVM provides one of the only practical privacy + interoperability solutions that can scale, and is the only solution that allows for private computation over multiple inputs and multiple parties. </p>
                    <h1>What problem does it solve?</h1>
                    <h2>For many decentralized applications, in particular decentralized finance, solutions for privacy and interoperability are fundamental pieces of the puzzle that are still missing.</h2>
                    <p>Trustless privacy and interoperability is absolutely necessary for achieving truly decentralized applications that are secure, usable, and liquid. Dark pools, DEXs, leverage, lending, collateralization, transferring digital assets and many other use cases are now made private, interoperable, and practical through RenVM.</p>
                    <h1>What can be built with RenVM?</h1>
                    <h2>RenVM serves as an plug-in for decentralized finance and therefore, any DeFi application can incorporate RenVM’s capabilities into their applications and existing smart contracts.</h2>
                    <p>If your project would benefit from cross-chain liquidity, then you stand to benefit from integrating with RenVM.</p>
                </div>
                <div className={`renvm--toc ${tocHidden ? "hidden" : ""}`} ref={node => this.tocRef = node}>
                    <h1>Table of contents</h1>
                    <div className="renvm--toc--contents" />
                    <div onClick={() => this.toggleTOC()} className="toc--button" />
                    <div className="renvm--toc--footer">
                        <div>
                            <ExternalLink className="button">Docs</ExternalLink>
                            <ExternalLink className="button">Litepaper</ExternalLink>
                        </div>
                        <div className="footer--bottom">
                            <ExternalLink className="help--button"><img src={helpIcon} />Ask us a question</ExternalLink>
                            <CopySocial />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private handleClick = (e: any) => {
        // click is inside
        if (this.tocRef === null || this.tocRef.contains(e.target)) {
            return;
        }

        // click is outside, close TOC
        this.setState({ tocHidden: true });
    }

    private toggleTOC = () => {
        this.setState({ tocHidden: !this.state.tocHidden });
    }
}
