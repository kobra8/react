import React from 'react';

const renderList = (events)=> {
    return (
        <ul>
            {events.map((x) => {
                let date = Date.parse(x.date);
                if (date >= Date.now()) {
                    return (
                        <li key={x.id}>
                            <strong>{x.name}</strong><br />
                            Gdzie: {x.place} <br />
                            Kiedy: {x.date} {x.time}
                        </li>
                    )
                };
                return null;
            })
            }
        </ul>
    );
}

export default renderList  ;