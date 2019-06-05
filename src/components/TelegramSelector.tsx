import * as React from "react";
import { ExternalLink } from "./ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

interface TelegramSelectorProps {
    links: { name: string, url: string }[];
    default?: number;
}

export const TelegramSelector = (props: TelegramSelectorProps) => {
    const { links } = props;
    const defaultValue = props.default || 0;
    const [value, setValue] = React.useState(links[defaultValue].url);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="telegram--button">
            <div className="telegram--button--container">
                <ExternalLink className="button button--alt" href={value}><FontAwesomeIcon icon={faTelegramPlane} pull="left" />Open Telegram</ExternalLink>
                <div className="telegram--select">
                    <select value={value} onChange={handleChange}>
                        {links.map((l, index) => <option key={`telegram-select-${index}-${l.name}`} value={l.url}>{l.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );

}
