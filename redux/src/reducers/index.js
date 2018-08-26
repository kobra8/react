import { combineReducers } from 'redux';

import { eventsReducer } from "./eventsReducer";
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({  // Funkcja łącząca reducery róznych typów 
  eventsStore: eventsReducer,
  detailsStore: detailsReducer
});

export default rootReducer;