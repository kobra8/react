import React from 'react';
import events from '../data/events';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';

import { connect } from 'react-redux';
import * as actions from '../actions/events';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  events: [],
      filter: '',
      newName: '',
      newNameValid: false,
      newPlace: '',
      newPlaceValid: false,
      newDate: '',
      newDateValid: false,
      newTime: '',
      newTimeValid: false
    };
  }

  componentDidMount() {
    this.setState({
      events
    });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.props.clearEvents();
   // this.setState({ events: [] });
  }

  onDeleteClicked(id, event) {
    event.preventDefault();

    const filteredArray = this.state.events.filter(item => item.id !== id);

    this.setState({
      events: filteredArray
    });
  }

  onFilterChange(event) {
    const value = event.currentTarget.value;

    this.setState({
      filter: value
    });
  };

  onEventFieldChange(field, event) {
    const value = event.currentTarget.value;
    this.setState({
      [field]: value,
      [field + 'Valid']: value.length > 0
    });
  }

  onEventAdd(event) {
    event.preventDefault();

    const {
      events,
      newName,
      newNameValid,
      newPlace,
      newPlaceValid,
      newDate,
      newDateValid,
      newTime,
      newTimeValid
    } = this.state;

    const maxId = Math.max(...events.map(item => item.id));

    events.push({
      id: maxId + 1,
      name: newName,
      place: newPlace,
      date: newDate,
      time: newTime
    });

    if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
      this.setState({
        events
      });
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.state.newName}
                  place={this.state.newPlace}
                  date={this.state.newDate}
                  time={this.state.newTime}
                  nameValid={this.state.newNameValid}
                  placeValid={this.state.newPlaceValid}
                  dateValid={this.state.newDateValid}
                  timeValid={this.state.newTimeValid}
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
      clearEvents: ()=> dispatch(actions.clearEvents())
    };
  };


//Fukcja Connect wiąże komponent React ze stanem aplikacji Redux
export default connect(mapStateToProps, mapDispatchToProps)(Events);
