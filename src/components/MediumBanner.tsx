import * as React from "react";

import Slider from "react-slick";

import { ExternalLink } from "./ExternalLink";
import { TrashableReactProps, withTrashable } from "../lib/trashable";
import { fetchMediumPosts, MediumPost } from "../lib/medium";

interface MediumBannerProps extends TrashableReactProps {
    /** The username of the medium account */
    mediumName: string;
    /** The maximum number of posts to display in the banner */
    limit?: number;
    /** The maximum number of days since posting for a post to be considered "new".
     *  If freshness is undefined or 0, the "new" label will be disabled.
     */
    freshness?: number;
}

interface MediumBannerState {
    ready: boolean;
    mediumPosts: MediumPost[];
}

class MediumBannerClass extends React.Component<MediumBannerProps, MediumBannerState> {
    private mediumUrl: string;

    public constructor(props: MediumBannerProps) {
        super(props);
        this.state = {
            ready: false,
            mediumPosts: [],
        };
        this.mediumUrl = `https://medium.com/${this.props.mediumName}/`;
    }

    public async componentDidMount(): Promise<void> {
        const { mediumName, limit } = this.props;
        const mediumPosts = await this.props.registerPromise(fetchMediumPosts(mediumName));
        const sliceUntil = (limit && limit > 0) ? limit : mediumPosts.length;
        this.setState({
            ready: true,
            mediumPosts: mediumPosts.slice(0, sliceUntil),
        });
    }

    public render(): JSX.Element {
        const { mediumPosts, ready } = this.state;
        const settings = {
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
        };
        return (
            <div className="medium-banner">
                <div className="container">
                    <Slider className={`medium-banner--slider ${ready ? "ready" : ""}`} {...settings}>
                        {mediumPosts.map(post => this.generateLink(post))}
                    </Slider>
                </div>
            </div>
        );
    }

    private generateLink(post: MediumPost): JSX.Element {
        return (
            <div className="medium-banner--link content--links" key={post.id}>
                <ExternalLink href={this.mediumUrl + post.uniqueSlug}>
                    <span className={this.isNew(post.firstPublishedAt) ? "new" : ""}>{post.title} &rarr;</span>
                </ExternalLink>
            </div>
        );
    }

    private isNew(timestamp: number): boolean {
        const { freshness } = this.props;
        // If freshness is undefined or <= zero, then don't show "new" label
        if (!freshness || freshness <= 0) {
            return false;
        }
        // Timestamps can be in the future (due to timezones)
        const now = Date.now();
        if (now <= timestamp) {
            return true;
        }
        // Otherwise check the number of days in between
        const daysBetween = (now - timestamp) / 1000 / 60 / 60 / 24;
        return daysBetween < freshness;
    }

}

export const MediumBanner = withTrashable(MediumBannerClass);

export const MediumBannerInstance = <MediumBanner mediumName="renproject" limit={3} freshness={3} />;
