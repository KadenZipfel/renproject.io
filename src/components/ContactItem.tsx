import * as React from "react";

interface ContactItemProps {
    name: string;
    email: string;
}

interface ContactItemState {
}

class ContactItem extends React.Component<ContactItemProps, ContactItemState> {
    public render(): JSX.Element {
        const { name, email } = this.props;
        return (
            <div className="contact--item">
                <p><b>{name}</b></p>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        );
    }
}

export default ContactItem;
