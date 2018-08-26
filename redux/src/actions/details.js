// ACTIONS dla widoku Details

import * as constants from '../constants';

export function eventDetails(eventId){
  return {
    type: constants.DETAILS_DATA,
    payload: {
      eventId
    }
  }
}