import * as React from "react";

import inflection from "inflection";

interface ExpandableListItemProps {
    title: string;
    open?: boolean;
    onClick?: () => void;
}

interface ExpandableListItemState {
    selected: boolean;
}

// tslint:disable:jsx-no-lambda
export class ExpandableListItem extends React.Component<ExpandableListItemProps, ExpandableListItemState> {
    constructor(props: ExpandableListItemProps) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    public render(): JSX.Element {
        const { open, title, children } = this.props;
        const { selected } = this.state;
        const showContent = (open !== undefined) ? open : selected;
        return (
            <div className={`expandable-list--item ${showContent ? "open" : ""}`} key={title}>
                <div onClick={this.handleClick} className={`expandable-list--item--title unselectable`}><h2>{title}</h2></div>
                <div style={{cursor: `${!showContent ? "pointer" : "default"}`}} onClick={() => { if (showContent) {return;} this.handleClick(); }} className="expandable-list--item--description">{children}</div>
            </div>
        );
    }

    private handleClick = () => {
        const { onClick } = this.props;
        const { selected } = this.state;
        if (onClick) {
            onClick();
        }
        this.setState({ selected: !selected });
    }
}

interface ExpandableListProps {
    items: Array<{ title: string; description: React.ReactNode; image: string }>;
}

interface ExpandableListState {
    selected: number | null;
}

export class ExpandableList extends React.Component<ExpandableListProps, ExpandableListState> {
    constructor(props: ExpandableListProps) {
        super(props);
        this.state = {
            selected: null,
        };
    }

    public render(): JSX.Element {
        const { items } = this.props;
        return (
            <div className="section--techstack">
                <div className="expandable-list">
                    {items.map((item, index) => {
                        const props = {
                            title: item.title,
                            open: this.state.selected === index,
                            onClick: () => { this.onClickHandler(index); },
                        };
                        return (<ExpandableListItem key={index} {...props}>
                            {item.description}
                        </ExpandableListItem>);
                    })}
                </div>
                <div className="techstack--column">
                    <div className="techstack">
                        {
                            items.map((item, index) => {
                                const imageUrl = require(`../styles/images/illustration-techstack/${item.image}`);
                                return (<img className={`techstack--img${this.state.selected === index ? " selected" : "" } ${inflection.dasherize(item.title.toLowerCase())}`} key={`teckstack-image--${index}`} src={imageUrl} />);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    private onClickHandler = (index: number) => {
        const { selected } = this.state;
        const newSelected = (index !== selected) ? index : null;
        this.setState({ selected: newSelected });
    }
}

// tslint:enable:jsx-no-lambda
