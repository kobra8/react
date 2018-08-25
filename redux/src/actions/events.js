// ACTIONS

import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR
  };
}

export function changeFormField(field, value){
  return {
    type: constants.EVENT_FORM_DATA,
    payload: {
      field,
      value
    }
  }
}

export function addEvent(name, place, date, time) {
  return {
    type: constants.EVENT_ADD,
    payload: {
      name, 
      place, 
      date, 
      time
    }
  };
}

export function deleteEvent(eventId) {
  return {
    type: constants.EVENT_DELETE,
    payload: {
      eventId
    }
  };
}

export function filterEvents(filter) {
  return {
    type: constants.EVENTS_FILTER,
    payload: {
      filter
    }
  };
}
