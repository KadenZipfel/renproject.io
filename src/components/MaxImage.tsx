import * as React from "react";

import { debounce } from "ts-debounce";
interface MaxImageProps {
    align: string;
    image: string;
}

interface MaxImageState {
    marginLeft: number;
    width: number;
    height: number;
    backgroundPositionX: string;
}

class MaxImage extends React.Component<MaxImageProps, MaxImageState> {
    private contentRef: HTMLElement | null;
    private updateImageSizeDebounced: any;

    public constructor(props: MaxImageProps) {
        super(props);
        let backgroundPositionX = "";
        if (this.props.align === "right") {
            backgroundPositionX = "0%";
        } else {
            backgroundPositionX = "100%";
        }
        this.state = {
            marginLeft: 0,
            width: 0,
            height: 0,
            backgroundPositionX,
        };
        this.contentRef = null;
        this.updateImageSizeDebounced = debounce(this.updateImageSize, 200);
    }

    public updateImageSize = () => {
        if (this.contentRef !== null && this.contentRef.parentElement !== null) {
            let width = this.contentRef.parentElement.offsetWidth + this.contentRef.parentElement.offsetLeft;
            let marginLeft = 0;
            if (this.props.align === "right") {
                width = window.innerWidth - this.contentRef.parentElement.getBoundingClientRect().left;
            } else {
                marginLeft = -this.contentRef.parentElement.getBoundingClientRect().left;
            }
            this.setState({
                width,
                height: this.contentRef.parentElement.getBoundingClientRect().height,
                marginLeft,
            });
        }
    }

    public componentDidMount(): void {
        window.addEventListener("resize", this.updateImageSizeDebounced, false);
        this.updateImageSize();
    }

    public componentWillUnmount(): void {
        window.removeEventListener("resize", this.updateImageSizeDebounced, false);
    }

    public render(): JSX.Element {
        const { image } = this.props;
        const { height, width, marginLeft, backgroundPositionX } = this.state;
        return (
            <div ref={(ref) => this.contentRef = ref} className="max-image" style={{
                width,
                maxHeight: height,
                backgroundImage: `url(${image}`,
                backgroundPositionX,
                marginLeft,
            }} />
        );
    }
}

export default MaxImage;
