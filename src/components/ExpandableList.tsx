import * as React from "react";

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
        const { open, title, children, onClick } = this.props;
        const { selected } = this.state;
        const showContent = (open !== undefined) ? open : selected;
        return (
            <div className={`expandable-list--item ${showContent ? "open" : ""}`} key={title}>
                <div onClick={() => { if (onClick) {onClick();} this.setState({ selected: !selected }); }} className={`expandable-list--item--title unselectable`}><h2>{title}</h2></div>
                <div className="expandable-list--item--description">{children}</div>
            </div>
        );
    }
}

interface ExpandableListProps {
    items: Array<{ title: string; description: React.ReactNode; }>;
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
            <div className="expandable-list">
                {items.map((item, index) => {
                    const props = {
                        title: item.title,
                        open: this.state.selected === index,
                        onClick: () => {this.onClickHandler(index);},
                    };
                    return (<ExpandableListItem key={index} {...props}>
                        {item.description}
                    </ExpandableListItem>);
                })}
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
