import * as constants from '../constants';
import events from '../data/events.json';

const intialState = {
  events,
  event: {}
}

export function detailsReducer(state = intialState, action){
  switch(action.type) {
    case constants.DETAILS_DATA:
    const id = action.payload.eventId;
    const event = state.events.find(item => item.id === parseInt(id, 10));
    return { ...state, event }
    default:
      return state;
  }
}