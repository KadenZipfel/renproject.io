import * as React from "react";

interface ExpandableListItemProps {
    title: string;
    open?: boolean;
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
        const showContent = (open === undefined) ? selected : open;
        return (
            <div className={`expandable-list--item ${showContent ? "open" : ""}`} key={title}>
                <div onClick={() => { this.setState({ selected: !selected }); }} className={`expandable-list--item--title unselectable`}><h2>{title}</h2></div>
                <div className="expandable-list--item--description">{children}</div>
            </div>
        );
    }
}
