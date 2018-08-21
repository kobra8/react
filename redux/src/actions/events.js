import * as constants from '../constants';

export function clearEvents() {
  return {
    type: constants.EVENTS_CLEAR
  };
}

export function setId(id) {
  return {
    type: constants.EVENTS_CLEAR,
    id: id
  };
}