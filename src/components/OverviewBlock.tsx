import * as React from "react";

interface OverviewBlockProps {
    image: any;
    title: string;
    subtitle: string;
    description: string;
}

export const OverviewBlock = (props: OverviewBlockProps) => {
    const { image, title, subtitle, description } = props;
    return (
        <div className="overview--block">
            <div className="block--image">
                <img src={image} />
            </div>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
