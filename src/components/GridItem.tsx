import * as React from "react";

interface GridItemProps {
    type: string;
    link?: string;
    image: string;
    imageHover?: string;
    height: number;
    top?: number;
    left?: number;
    brightness?: number;
}

interface GridItemState {
    imageURL: string;
    hovered: boolean;
}

class GridItem extends React.Component<GridItemProps, GridItemState> {
    public static defaultProps = {
        top: 0,
        left: 0,
        brightness: 100,
    };

    public constructor(props: GridItemProps) {
        super(props);
        this.state = {
            imageURL: this.imageURL(this.props.image),
            hovered: false,
        };
        this.handleHover = this.handleHover.bind(this);
    }

    public render(): JSX.Element {
        const { type, link, height, top, left, brightness } = this.props;
        const { imageURL } = this.state;
        const imageStyle: React.CSSProperties = {
            backgroundImage: `url('${imageURL}')`,
            height,
            transform: `translate(${left}px, ${top}px)`,
            WebkitTransform: `translate(${left}px, ${top}px)`,
        };
        return (
            <div className={`logos--image ${type}--image`} style={{ filter: `brightness(${brightness}%) grayscale(100%)` }}>
                <a href={link ? link : ""} target="_blank" rel="noopener noreferrer">
                    <div style={imageStyle} onMouseOver={this.handleHover} onMouseOut={this.handleHover} />
                </a>
            </div>
        );
    }

    private imageURL(image: string): any {
        return require(`../styles/images/${this.props.type}/${image}`);
    }

    private handleHover(e: React.MouseEvent<HTMLElement>): void {
        const { image, imageHover } = this.props;
        const { hovered } = this.state;
        if (!imageHover) {
            return;
        }
        const newImage = hovered ? image : imageHover;
        this.setState({
            imageURL: this.imageURL(newImage),
            hovered: !hovered,
        });
    }
}

export default GridItem;
