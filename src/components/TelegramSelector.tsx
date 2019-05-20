import * as React from "react";
import { ExternalLink } from "./ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

interface TelegramSelectorProps {
    links: { name: string, url: string }[];
    default?: number;
}

interface TelegramSelectorState {
    value: string;
}


export class TelegramSelector extends React.Component<TelegramSelectorProps, TelegramSelectorState> {
    constructor(props: TelegramSelectorProps) {
        super(props);
        const defaultValue = props.default || 0;
        this.state = {
            value: props.links[defaultValue].url,
        };
    }

    public render(): JSX.Element {
        const { links } = this.props;
        const { value } = this.state;
        console.log(links);
        return (
            <div className="telegram--button">
                <div className="telegram--button--container">
                    <ExternalLink className="button button--alt" href={value}><FontAwesomeIcon icon={faTelegramPlane} pull="left" />Open Telegram</ExternalLink>
                    <div className="telegram--select">
                        <select value={value} onChange={this.handleChange}>
                            {links.map((l, index) => <option key={`telegram-select-${index}-${l.name}`} value={l.url}>{l.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ value: event.target.value });
    }

}
