import * as React from "react";

import { CopySocial } from "./Footer";
import Menu from "./Menu";

interface MobileMenuProps {
    opened: boolean;
    postClick?: () => void;
}

interface MobileMenuState {
}


class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
    public render(): JSX.Element {
        const { opened, postClick } = this.props;
        return (
            <div className={`mobile--menu ${opened ? "" : "closed"}`} >
                <ul>
                    <Menu postClick={postClick} />
                </ul >
                <div className="mobile--menu--footer">
                    {CopySocial}
                </div>
            </div >
        );
    }
}

export default MobileMenu;
