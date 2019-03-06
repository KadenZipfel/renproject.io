import * as React from "react";

import { NavLink } from "react-router-dom";

import { REN_URLS } from "../lib/constants";


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
                {/* <li className="menu--link"><a href="#" target="_blank" rel="noopener noreferrer">Docs</a></li> */}
               <li className="menu--link"><a onClick={this.handleOnClick} href={REN_URLS.medium} target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li className="menu--link"><a onClick={this.handleOnClick} href="https://republicprotocol.zendesk.com" target="_blank" rel="noopener noreferrer">Help</a></li>
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
