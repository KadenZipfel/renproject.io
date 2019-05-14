import * as React from "react";

import { ExternalLink } from "./ExternalLink";

interface HelpBlockProps {
    title: string;
    subtitle: string;
    icon: string;
}

interface HelpBlockState {
}

class HelpBlock extends React.Component<HelpBlockProps, HelpBlockState> {
    public render(): JSX.Element {
        const { title, subtitle, icon } = this.props;
        return (
            <div className="help--block">
                <div className="help--block--content">
                    <img src={icon} />
                    <h2>{title}</h2>
                    <ExternalLink href="">{subtitle} &rarr;</ExternalLink>
                </div>
            </div>
        );
    }
}

export default HelpBlock;
