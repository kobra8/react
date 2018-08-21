import * as constants from '../constants';
import { events } from '../data/events';

const initialState = {
  events
}

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.EVENTS_CLEAR:
      return { ...state, events: [] }
    default:
      return state;
  }
}