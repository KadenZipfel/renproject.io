import * as React from "react";

const Fade = require("react-reveal/Fade");

class Featurettes extends React.Component {
    public render(): JSX.Element {
        const featuretteIcon = require("../styles/images/blue-square-icon.svg");
        return (
            <div className="featurettes">
                <div className="container">
                    <div className="featurettes--items">
                        <Fade up delay={100}>
                            <div className="featurettes--item">
                                <img src={featuretteIcon} />
                                <div>
                                    <p>100x faster than atomic swaps</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={300}>
                            <div className="featurettes--item">
                                <img src={featuretteIcon} />
                                <div>
                                    <p>Integrates into existing infrastructure</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={500}>
                            <div className="featurettes--item">
                                <img src={featuretteIcon} />
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
