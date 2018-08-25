import React from 'react';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';

import { connect } from 'react-redux';
import * as actions from '../actions/events';

class Events extends React.Component {

  onClearClicked(event) { // Changed to reducers function
    event.preventDefault();
    this.props.clearEvents();
  }

  onDeleteClicked(id, event) { // Changed to reducers function
    event.preventDefault();
    this.props.deleteEvent(id)
  }

  onFilterChange(event) { // Changed to reducers function
    const value = event.currentTarget.value;
    this.props.filterEvents(value);
  };

  onEventFieldChange(field, event) {
    const value = event.currentTarget.value;
    this.props.changeFormField(field, value);
  }

  onEventAdd(event) {
    event.preventDefault();
    const {
      newName,
      newNameValid,
      newPlace,
      newPlaceValid,
      newDate,
      newDateValid,
      newTime,
      newTimeValid
    } = this.props;

    if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
      this.props.addEvent(newName, newPlace, newDate, newTime)
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.props.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.newName}
                  place={this.props.newPlace}
                  date={this.props.newDate}
                  time={this.props.newTime}
                  nameValid={this.props.newNameValid}
                  placeValid={this.props.newPlaceValid}
                  dateValid={this.props.newDateValid}
                  timeValid={this.props.newTimeValid}
                  onFieldChange={this.onEventFieldChange.bind(this)}
                  onFormSubmit={this.onEventAdd.bind(this)}
        />
      </div>
    );
  }
}
// Funkcja mapowania dzięki której wszystkie właściwości obiektu STORE są dostępne w obiekcie PROPS komponentu
const mapStateToProps = (state)=> {
  return {
    ...state
  };
};
// Funkcja służy do powiązania metody dispatch (ze store) z obiektem props komponentu -> wywoływane są reducery w obiekcie store i potem re-renderowanie komponentu
  const mapDispatchToProps = (dispatch) => {
    return {
      clearEvents: ()=> dispatch(actions.clearEvents()),
      addEvent: (name, place, date , time)=> dispatch(actions.addEvent(name, place, date , time)),
      deleteEvent: (eventId)=> dispatch(actions.deleteEvent(eventId)),
      filterEvents: (filter)=> dispatch(actions.filterEvents(filter)),
      changeFormField: (field, value)=> dispatch(actions.changeFormField(field, value))
    };
  };


//Fukcja Connect wiąże komponent React ze stanem aplikacji Redux
export default connect(mapStateToProps, mapDispatchToProps)(Events);
