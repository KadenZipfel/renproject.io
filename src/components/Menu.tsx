import * as React from "react";

import { NavLink } from "react-router-dom";

import { REN_URLS } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";


interface MenuProps {
    postClick?: () => void;
}

interface MenuState {
}

class Menu extends React.Component<MenuProps, MenuState> {
    public render(): JSX.Element {
        return (
            <>
                <li className="menu--link"><NavLink onClick={this.handleOnClick} to="/" exact activeClassName="active">Home</NavLink></li>
                <li className="menu--link"><NavLink onClick={this.handleOnClick} to="/about" activeClassName="active">About</NavLink></li>
                <li className="menu--link"><NavLink onClick={this.handleOnClick} to="/roadmap" activeClassName="active">Roadmap</NavLink></li>
                <li className="menu--link"><NavLink onClick={this.handleOnClick} to="/renvm" activeClassName="active">RenVM</NavLink></li>
                <li className="menu--link"><ExternalLink onClick={this.handleOnClick} href={REN_URLS.medium}>Blog</ExternalLink></li>
                <li className="menu--link"><ExternalLink onClick={this.handleOnClick} href={REN_URLS.zendesk}>FAQ</ExternalLink></li>
            </>
        );
    }

    private handleOnClick = (e: React.MouseEvent<HTMLElement>): void => {
        const { postClick } = this.props;
        if (postClick) {
            postClick();
        }
    }

}

export default Menu;
