import React from 'react';

const EventItem = (props) => {

    return (
        <li key={props.x.id}>
            <strong>{props.x.name}</strong><br />
            Gdzie: {props.x.place} <br />
            Kiedy: {props.x.date} {props.x.time}
            <button onClick={props.clearItem.bind(this, props.x.id)}>Delete meeting</button>
        </li>
    )

}

export default EventItem;