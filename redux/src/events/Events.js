import React from 'react';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';

import { connect } from 'react-redux';
import * as actions from '../actions/events';

class Events extends React.Component {

  componentDidMount(){
    this.props.getEvents();
  }

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

  //Funkcja onFieldChange obsługuje wszystkie inputy
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
    } = this.props.eventsStore;

    if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
      this.props.addEvent(newName, newPlace, newDate, newTime)
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.eventsStore.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.props.eventsStore.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.eventsStore.newName}
                  place={this.props.eventsStore.newPlace}
                  date={this.props.eventsStore.newDate}
                  time={this.props.eventsStore.newTime}
                  nameValid={this.props.eventsStore.newNameValid}
                  placeValid={this.props.eventsStore.newPlaceValid}
                  dateValid={this.props.eventsStore.newDateValid}
                  timeValid={this.props.eventsStore.newTimeValid}
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
      changeFormField: (field, value)=> dispatch(actions.changeFormField(field, value)),
      getEvents: ()=> dispatch(actions.getEvents())
    };
  };


//Fukcja Connect wiąże komponent React ze stanem aplikacji Redux
export default connect(mapStateToProps, mapDispatchToProps)(Events);
