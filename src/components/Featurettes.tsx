import * as React from "react";

const Fade = require("react-reveal/Fade");

class Featurettes extends React.Component {
    public render(): JSX.Element {
        const featurette1 = require("../styles/images/icons/rp-icon-orderbook.svg");
        const featurette2 = require("../styles/images/icons/rp-atomicswap.svg");
        const featurette3 = require("../styles/images/icons/icon-blockorder.svg");
        return (
            <div className="featurettes">
                <div className="container">
                    <div className="featurettes--items">
                        <Fade up delay={100}>
                            <div className="featurettes--item">
                                <img src={featurette1} />
                                <div>
                                    <h2 className="featurette--title">Hidden Order Book</h2>
                                    <p>Private orders until execution for large amounts of tokens.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={300}>
                            <div className="featurettes--item">
                                <img src={featurette2} />
                                <div>
                                    <h2 className="featurette--title">Cross-chain Asset Trades</h2>
                                    <p>Trade cryptocurrencies and tokenized assets cross-chain.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade up delay={500}>
                            <div className="featurettes--item">
                                <img src={featurette3} />
                                <div>
                                    <h2 className="featurette--title">Infrastructure for Block Orders</h2>
                                    <p>Place large trades with minimal market impact and price slippage.</p>
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
