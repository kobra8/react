// ACTIONS dla widoku Details

import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getData(){
  return (dispatch) => {
    dispatch(detailsLoading());
    fetch('http://localhost:3100/events')
    .then(res => res.json())
    .then(data => {
      dispatch(getSuccess(data))
    })
    .catch(error => dispatch(getError(error)));
  }
}

export function detailsLoading(){
  return {
  type: constants.DETAILS_LOADING
  }
}

export function getSuccess(data){
  return {
    type: constants.DETAILS_SUCCESS,
      payload: {
        data
      }
  }
}

export function getError(error){
  return {
    type: constants.DETAILS_ERROR,
    payload: {
      error
    }
  }
}

export function eventDetails(eventId){
  return {
    type: constants.DETAILS_FIND,
    payload: {
      eventId
    }
  }
}


