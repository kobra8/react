import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json'
import renderList from './data/renderList.js'

ReactDOM.render(
    renderList(events)
    // <ul>
    //     {events.filter(y => Date.parse(y.date) >= Date.now()).map((x) => {
    //         return <li key={x.id}>
    //             <strong>{x.name}</strong><br />
    //             Gdzie: {x.place} <br />
    //             Kiedy: {x.date} {x.time}</li>;
    //     })
    //     }
    // </ul>

    , document.getElementById('root'));
