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
    default:
      return state;
  }
}