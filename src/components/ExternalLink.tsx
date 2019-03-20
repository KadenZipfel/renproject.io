import * as React from "react";

interface ExternalLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    doNotTrack?: boolean;
}

export class ExternalLink extends React.Component<ExternalLinkProps, {}> {
    public render(): JSX.Element {
        const { doNotTrack, children, onClick, ...rest } = this.props;
        const newProps = {
            ...rest,
        };
        if (!doNotTrack || onClick) {
            newProps["onClick"] = this.onClick;
        }
        return (
            <a {...newProps} target="_blank" rel="noopener noreferrer">{children}</a>
        );
    }

    private onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const { doNotTrack, href, onClick } = this.props;
        if (!doNotTrack) {
            gtag("event", "click", {
                "event_category": "outbound_link",
                "value": href
            });
        }
        if (onClick) {
            onClick(event);
        }
    };
};
