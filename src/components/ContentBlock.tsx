import * as React from "react";

const Fade = require("react-reveal/Fade");

interface ContentBlockProps {
    title?: string;
    subtitle: string;
}

interface ContentBlockState {
}

class ContentBlock extends React.Component<ContentBlockProps, ContentBlockState> {
    public render(): JSX.Element {
        const { title, subtitle, children } = this.props;
        return (
            <Fade up distance="50px" delay={100}>
                <>
                    <div className="content--heading">
                        {title &&
                            <h4>{title}</h4>
                        }
                        <h1>{subtitle}</h1>
                    </div>
                    {children &&
                        <div className="content--body">
                            {children}
                        </div>
                    }
                </>
            </Fade>
        );
    }
}

export default ContentBlock;
