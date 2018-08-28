// ACTIONS dla kontenera Events

import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

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

export function eventsLoading(){
  return {
    type: constants.EVENTS_LOADING
  }
}

export function eventsSuccess(data){
  return {
    type: constants.EVENTS_SUCCESS,
    payload:{
      data
    }
  }
}
export function eventsError(error){
  return {
    type: constants.EVENTS_ERROR,
    payload: {
      error
    }
  }
}

export function getEvents(){
  return (dispatch) => {
    dispatch(eventsLoading());
    fetch('http://localhost:3100/events')
    .then(response => response.json())
    .then( data => {
      dispatch(eventsSuccess(data))
      }
    )
    .catch( error => {
      dispatch(eventsError(error))
    })
  }
}
