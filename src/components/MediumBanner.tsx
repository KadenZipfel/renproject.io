import * as React from "react";

import Slider from "react-slick";

import { ExternalLink } from "./ExternalLink";
import { TrashableProps, withTrashable } from "react-trashable";
import { fetchMediumPosts, MediumPost } from "../lib/medium";
import { StoreContext } from "../store/context";

interface MediumBannerProps extends TrashableProps {
    /** The username of the medium account */
    mediumName: string;
    /** The maximum number of posts to display in the banner */
    limit?: number;
    /** The maximum number of days since posting for a post to be considered "new".
     *  If freshness is undefined or 0, the "new" label will be disabled.
     */
    freshness?: number;
}

const MediumBannerClass = (props: MediumBannerProps) => {
    const mediumUrl: string = `https://medium.com/${props.mediumName}/`;
    const storeContext = React.useContext(StoreContext);
    if (storeContext === null) {
        return <></>;
    }

    const { mediumPosts, setMediumPosts } = storeContext;

    const fetchData = async () => {
        const { mediumName, limit } = props;
        const allMediumPosts = await props.registerPromise(fetchMediumPosts(mediumName));
        const sliceUntil = (limit && limit > 0) ? limit : allMediumPosts.length;
        setMediumPosts(allMediumPosts.slice(0, sliceUntil));
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    const generateLink = (post: MediumPost): JSX.Element => {
        return (
            <div className="medium-banner--link content--links" key={post.id}>
                <ExternalLink href={mediumUrl + post.uniqueSlug}>
                    <span className={isNew(post.firstPublishedAt) ? "new" : ""}>{post.title} &rarr;</span>
                </ExternalLink>
            </div>
        );
    }

    const isNew = (timestamp: number): boolean => {
        const { freshness } = props;
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

    const ready = mediumPosts !== undefined && mediumPosts.length > 0;

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
                    {mediumPosts.map(post => generateLink(post))}
                </Slider>
            </div>
        </div>
    );

}

export const MediumBanner = withTrashable(MediumBannerClass);

export const MediumBannerInstance = <MediumBanner mediumName="renproject" limit={3} freshness={3} />;
