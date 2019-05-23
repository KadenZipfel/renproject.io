import * as React from "react";
import ReactMarkdown from "react-markdown";
import tocbot from "tocbot";

import story from "../data/renvmStory.md";
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

const HeadingRenderer = (props: any) => {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, { id: slug }, props.children)
}

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

    public async componentDidMount(): Promise<void> {
        const resp = await fetch(story).then(resp => resp.text());
        this.setState({ postText: resp });
        tocbot.init({
            tocSelector: ".renvm--toc--contents",
            contentSelector: ".renvm--story",
            headingSelector: "h1, h2, h3",
            hasInnerContainers: true,
        });
    }

    public componentDidUpdate() {
        tocbot.refresh();
    }

    public render(): JSX.Element {
        const { tocHidden, postText } = this.state;
        const helpIcon = require("../styles/images/icons/looking-for-help-icon.svg");
        return (
            <div>
                <div className="renvm--story">
                    <ReactMarkdown
                        source={postText}
                        renderers={{ heading: HeadingRenderer }}
                    />
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
