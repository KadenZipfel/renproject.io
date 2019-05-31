import * as React from "react";

const Fade = require("react-reveal/Fade");

class Featurettes extends React.Component {
    public render(): JSX.Element {
        const fasterIcon = require("../styles/images/icons/icon-feat-faster.svg");
        const interopIcon = require("../styles/images/icons/icon-feat-interop.svg");
        const securityIcon = require("../styles/images/icons/icon-feat-security.svg");
        return (
            <div className="featurettes">
                <div className="container">
                    <div className="featurettes--items">
                        <Fade up delay={100}>
                            <div className="featurettes--item">
                                <img src={fasterIcon} />
                                <div>
                                    <p>100x faster than atomic swaps</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={300}>
                            <div className="featurettes--item">
                                <img src={interopIcon} />
                                <div>
                                    <p>Integrates into existing infrastructure</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={500}>
                            <div className="featurettes--item">
                                <img src={securityIcon} />
                                <div>
                                    <p>Security for large volume trades</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featurettes;
