// REDUCERS

import * as constants from '../constants';
import events from '../data/events.json';

const initialState = { // Stan początkowy
  events
}

export function eventsReducer(state = initialState, action) { //Case dla reducera i wykonywane odpowiedniego typu akcje
  switch (action.type) {
    case constants.EVENTS_CLEAR:
      return { ...state, events: [] }
    case constants.EVENT_DELETE:
      return { ...state, events: action.payload.events }
    default:
      return state;
  }
}