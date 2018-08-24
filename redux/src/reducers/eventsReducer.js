// REDUCERS

import * as constants from '../constants';
import events from '../data/events.json';

const initialState = { // Stan początkowy
  events,
  filter: ''
}

export function eventsReducer(state = initialState, action) { //Case dla reducera i wykonywane odpowiedniego typu akcje
  switch (action.type) {

    case constants.EVENTS_CLEAR:
      return { ...state, events: [] }

    case constants.EVENT_DELETE:
      const id = action.payload.eventId;
      const filteredArray =  state.events.filter(item => item.id !== id);
      return { ...state, events: filteredArray };

    case constants.EVENTS_FILTER:
      const filterValue = action.payload.filter;
      return { ...state, filter: filterValue };

    default:
      return state;
  }
}