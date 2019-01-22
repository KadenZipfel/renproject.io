import * as React from "react";

interface ListItemProps {
    title: string;
    image: string;
    imageHover?: string;
    link?: string;
    description?: string;
    disabled?: boolean;
}

interface ListItemState {
    imageURL: string;
    hovered: boolean;
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
    public constructor(props: ListItemProps) {
        super(props);
        this.state = {
            imageURL: this.props.image,
            hovered: false,
        };
        this.handleHover = this.handleHover.bind(this);
    }

    public render(): JSX.Element {
        const { title, description, link, disabled } = this.props;
        return (
            <a className={`list--item ${disabled ? "disabled" : ""}`}
                onMouseOver={this.handleHover}
                onMouseOut={this.handleHover}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="list--image">
                    <img src={this.state.imageURL} />
                </div>
                <div className="list--content">
                    <p className="list--title">{title}</p>
                    {description && <p>{description}</p>}
                </div>
            </a>
        );
    }

    private handleHover(e: React.MouseEvent<HTMLElement>): void {
        const { hovered } = this.state;
        const { image, imageHover } = this.props;
        if (!imageHover) {
            return;
        }
        const imageURL = hovered ? image : imageHover;
        this.setState({
            imageURL,
            hovered: !hovered,
        });
    }
}

export default ListItem;
