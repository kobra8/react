// REDUCERS

import * as constants from '../constants';
import events from '../data/events.json';

const initialState = { // Stan początkowy
  events,
  filter: '',
  newName: '',
  newNameValid: false,
  newPlace: '',
  newPlaceValid: false,
  newDate: '',
  newDateValid: false,
  newTime: '',
  newTimeValid: false
}

export function eventsReducer(state = initialState, action) { //Case dla reducera i wykonywane odpowiedniego typu akcje
  switch (action.type) {

    case constants.EVENTS_CLEAR:
      return { ...state, events: [] }

    case constants.EVENT_FORM_DATA:
      const { field, value } = action.payload
      return {...state, [field]: value, [field + 'Valid']: value.length > 0 };
       //Powyżej użyto ES6 [dowolny string] otoczony [] staje się nazwą właściwości

    case constants.EVENT_ADD:
      const stateCopy = {...state}
      const maxId = Math.max(...stateCopy.events.map(item => item.id));
      const {name, place, date, time } = action.payload;
      stateCopy.events.push({
        id: maxId + 1,
        name: name,
        place: place,
        date: date,
        time: time
      });
    return {
      ...state, 
      events: stateCopy.events,
      //Czyszczenie pól po dodaniu -> aktualizacja stanu
      newName: '',
      newNameValid: false,
      newPlace: '',
      newPlaceValid: false,
      newDate: '',
      newDateValid: false,
      newTime: '',
      newTimeValid: false
    };

    case constants.EVENT_DELETE:
      const id = action.payload.eventId;
      const filteredArray =  state.events.filter(item => item.id !== id);
      return { ...state, 
        events: filteredArray };

    case constants.EVENTS_FILTER:
      const filterValue = action.payload.filter;
      return { ...state, filter: filterValue };

    default:
      return state;
  }

  //Koniec funkcji eventsReducer
}