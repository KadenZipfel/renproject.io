import * as React from "react";
import ReactMarkdown from "react-markdown";
import tocbot from "tocbot";

import story from "../data/renvmStory.md";

interface RenVMStoryProps {
}

interface RenVMStoryState {
    postText: string;
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
    // private tocRef: HTMLDivElement | null = null;

    constructor(props: RenVMStoryProps) {
        super(props);
        this.state = {
            postText: "",
        };
    }

    public async componentDidMount(): Promise<void> {
        const resp = await fetch(story).then(resp => resp.text());
        this.setState({ postText: resp });
        tocbot.init({
            tocSelector: ".renvm--toc",
            contentSelector: ".renvm--story",
            headingSelector: "h1, h2, h3",
            hasInnerContainers: true,
        });
    }

    public componentDidUpdate() {
        tocbot.refresh();
    }

    public render(): JSX.Element {
        const { postText } = this.state;
        return (
            <>
                <div className="section section--story">
                    <div className="container">
                        <div className="row">
                            <div className="renvm--story">
                                <ReactMarkdown 
                                    source={postText} 
                                    renderers={{ heading: HeadingRenderer }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="renvm--toc" />
            </>
        );
    }
}
