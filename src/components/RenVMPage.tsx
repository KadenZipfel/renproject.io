import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";

class RenVMPage extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="renvm">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default RenVMPage;
