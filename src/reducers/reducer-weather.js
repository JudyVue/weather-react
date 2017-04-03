import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
  case FETCH_WEATHER:
    //we never want to manipulate our state, so that's why we're using spread operator to create entirely new array and new state
    return [ action.payload.data, ...state ]; //[city, city, city] NOT [city, [city, city]]
  }


  return state;
}
