// ACTIONS

import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR
  };
}

export function deleteEvent(filteredEvents) {
  return {
    type: constants.EVENT_DELETE,
    payload: {
      events: filteredEvents
    }
  };
}
