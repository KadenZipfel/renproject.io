import * as React from "react";

import { ExternalLink } from "./ExternalLink";
import { REN_URLS } from "../lib/constants";

export const Newsletter = () => (
    <div className="newsletter--container">
        <div className="newsletter">
            <h2>Want to integrate RenVM?</h2>
            <p>Sign up here and we'll let you know when it's ready!</p>
            <ExternalLink className="featured--button primary" href={REN_URLS.typeform}>Sign up</ExternalLink>
        </div>
    </div>
);
