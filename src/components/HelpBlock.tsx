import * as React from "react";

import { ExternalLink } from "./ExternalLink";

interface HelpBlockProps {
    title: string;
    subtitle: string;
    icon: string;
    href: string;
}

interface HelpBlockState {
}

class HelpBlock extends React.Component<HelpBlockProps, HelpBlockState> {
    public render(): JSX.Element {
        const { title, href, subtitle, icon } = this.props;
        return (
            <ExternalLink href={href} className="help--block">
                <div className="help--block--content">
                    <img src={icon} />
                    <h2>{title}</h2>
                    <span>{subtitle} &rarr;</span>
                </div>
            </ExternalLink>
        );
    }
}

export default HelpBlock;
