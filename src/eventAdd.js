import React from 'react';
import PropTypes from 'prop-types';

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input id="name" type="text" placeholder="Nazwa..." value={props.name} onChange={props.onFormChange.bind(this,'newName')} />
      <label htmlFor="name" style={props.newNameValid ? {display: 'none'} : {display: 'inline'}}>Pole jest wymagane</label>
      <input id="place" type="text" placeholder="Miejsce..." value={props.place} onChange={props.onFormChange.bind(this,'newPlace')} />
      <label htmlFor="place" style={props.newPlaceValid ? {display: 'none'} : {display: 'inline'}}>Pole jest wymagane</label>
      <input id="date" type="text" placeholder="Data..." value={props.date} onChange={props.onFormChange.bind(this,'newDate')} />
      <label htmlFor="date" style={props.newDateValid ? {display: 'none'} : {display: 'inline'}}>Pole jest wymagane</label>
      <input id="time" type="text" placeholder="Godzina..." value={props.time} onChange={props.onFormChange.bind(this,'newTime')} />
      <label htmlFor="time" style={props.newTimeValid ? {display: 'none'} : {display: 'inline'}}>Pole jest wymagane</label>
      <button type="submit">Dodaj</button>
    </form>
  );
}

EventAdd.propTypes = {
  name: PropTypes.string.isRequired,
  newNameValid: PropTypes.bool.isRequired,
  place: PropTypes.string.isRequired,
  newPlaceValid: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  newDateValid: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  newTimeValid: PropTypes.bool.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default EventAdd;
