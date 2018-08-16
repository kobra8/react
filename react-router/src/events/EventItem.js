import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventItem = (props) => {
  return (
    <li>
      <strong>{props.name}</strong><br />
      {/* Gdzie: {props.place}<br />
      Kiedy: {props.date} - {props.time}<br />
      <button onClick={props.onDeleteClicked.bind(this, props.id)}>Usuń</button> */}
      <Link to={`/events/details/${props.id}`}>Szczegóły</Link> 
      {/* Powyżej odnośnik zbudowany na bazie komponentu Link z react-router. Parametr itemId przekazany dynamicznie z props*/}
    </li>
  );
};

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  // place: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // time: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

export default EventItem;
