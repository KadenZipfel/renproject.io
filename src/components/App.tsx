import * as React from "react";

import { BrowserRouter, Route, RouteComponentProps, withRouter } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <>
                    <ScrollToTop />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </>
            </BrowserRouter>
        );
    }
}

export default App;

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration
const ScrollToTop = withRouter(
    class ScrollToTopWithoutRouter extends React.Component<RouteComponentProps<any>> {
        public componentDidUpdate(prevProps: Readonly<RouteComponentProps<any>>): void {
            const { pathname } = this.props.location;
            if (pathname !== prevProps.location.pathname) {
                window.scrollTo(0, 0);
                // Re-enable scrolling if location was changed from mobile menu
                (document.documentElement as HTMLElement).classList.remove("noscroll");
                // Get Google Analytics to track the different pages
                gtag("config", GA_MEASUREMENT_ID, {"page_path": pathname});
            }
        }

        public render(): JSX.Element | null {
            return null;
        }
    }
);
