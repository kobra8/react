import React from 'react';
import ReactDOM from 'react-dom';
import meetings from './data/events.json'
import { Meetings } from './data/renderList.js'

ReactDOM.render(
    <Meetings meetings={meetings} /> , document.getElementById('root'));
