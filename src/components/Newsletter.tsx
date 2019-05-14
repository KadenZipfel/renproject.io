import * as React from "react";

import { ExternalLink } from "./ExternalLink";

interface NewsletterProps {
}

interface NewsletterState {
}

export class Newsletter extends React.Component<NewsletterProps, NewsletterState> {
    public render(): JSX.Element {
        return (
            <div className="newsletter">
                <h2>Stay in the loop</h2>
                <p>Be the first to know when RenVM is operational. Or reach out if you have a project idea: <ExternalLink href="mailto:renshift@renproject.io">renshift@renproject.io</ExternalLink></p>
                <input placeholder="Email address"></input>
                <button className="featured--button primary">Sign up</button>
            </div>
        );
    }
}
