import { Map } from 'immutable';
import * as EVENT from './events';

const initialState = Map({
  tripDetails: undefined,
  isLoading: false,
});
const actionHandler = {};

actionHandler[EVENT.GET_TRIP_DETAILS_START] = state => state
  .set('isLoading', true);

actionHandler[EVENT.GET_TRIP_DETAILS_SUCCESS] = (state, action) => state
  .set('tripDetails', action.payload)
  .set('isLoading', false);

const reducer = (state = initialState, action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

export default reducer;
