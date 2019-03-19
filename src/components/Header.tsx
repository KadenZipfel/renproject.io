import * as React from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { REN_URLS } from "../lib/constants";
import { CopySocial } from "./Footer";

interface HeaderProps {
}

interface HeaderState {
    menuOpened: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    private htmlEl: HTMLElement;
    public constructor(props: HeaderProps) {
        super(props);
        this.state = {
            menuOpened: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleEscape = this.handleEscape.bind(this);
        this.htmlEl = document.documentElement as HTMLElement;
    }

    public handleOnClick(e: React.MouseEvent<HTMLElement>): void {
        e.preventDefault();
        if (this.state.menuOpened) {
            // We're about to close the menu
            this.htmlEl.classList.remove("noscroll");
        } else {
            // We're about to open the menu
            this.htmlEl.classList.add("noscroll");
        }
        this.setState({
            menuOpened: !this.state.menuOpened,
        });
    }

    public handleEscape(e: any) {
        if (e.keyCode === 27 && this.state.menuOpened) {
            this.closeMenu();
        }
    }

    public componentDidMount() {
        document.addEventListener("keydown", this.handleEscape, false);
    }
    public componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEscape, false);
    }

    public render(): JSX.Element {
        return (
            <>
                <MobileMenu opened={this.state.menuOpened} postClick={this.closeMenu} />
                <div className="fake--header" />
                <Headroom className={this.state.menuOpened ? "open" : "closed"} disableInlineStyles wrapperStyle={{ width: "100%", zIndex: "10" }}>
                    <div className="header">
                        <div className="container">
                            <NavLink to="/" className="home--link">
                                <div className="header--logo" />
                            </NavLink>
                            <ul className="header--menu">
                                <Menu />
                                <li className="menu--toggle menu--link"><a href="#" onClick={this.handleOnClick}><FontAwesomeIcon icon={this.state.menuOpened ? faTimes : faBars} pull="left" /></a></li>
                                <a className="header--renex button" href={REN_URLS.renEx} target="_blank" rel="noopener noreferrer">Trade on RenEx</a>
                                <CopySocial />
                            </ul>
                        </div>
                    </div>
                </Headroom>
            </>
        );
    }

    private closeMenu = (): void => {
        this.htmlEl.classList.remove("noscroll");
        this.setState({
            menuOpened: false,
        });
    }

}

export default Header;
