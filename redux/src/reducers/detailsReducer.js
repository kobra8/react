import * as constants from '../constants';

const intialState = {
  events: [],
  event: {},
  shouldUpdate: false,
  isLoading: false,
  isError: false
}

export function detailsReducer(state = intialState, action){
  switch(action.type) {
    case constants.DETAILS_LOADING:
      return {...state, isLoading: true }

    case constants.DETAILS_SUCCESS:
        return {...state, isLoading: false, shouldUpdate: true, events: action.payload.data}

    case constants.DETAILS_ERROR:
      return {...state, isLoading: false ,isError: true} 

    case constants.DETAILS_FIND:
      const id = action.payload.eventId;
      const event = state.events.find(item => item.id === parseInt(id, 10));
      return { ...state, event, shouldUpdate: false  }

    default:
      return state;
  }
}