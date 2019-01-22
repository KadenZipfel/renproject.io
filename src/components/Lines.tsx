import * as React from "react";

class Lines extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="lines">
                <div className="container">
                    <div className="row">
                        <div className="lines--item" />
                        <div className="lines--item" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Lines;
