import * as React from "react";

class Block extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="block--item" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;
