import { Map } from 'immutable';
import * as EVENT from './events';

const initialState = Map({
  isLoadingData: false,
  tripData: undefined,
  error: undefined,
});

const actionHandler = {};

actionHandler[EVENT.GET_TRIPS_START] = state => state.set('isLoadingData', true);

actionHandler[EVENT.GET_TRIPS_SUCCESS] = (state, action) => state
  .set('isLoadingData', false)
  .set('tripData', action.payload);
actionHandler[EVENT.GET_TRIPS_FAILURE] = (state, error) => state
  .set('isLoadingData', false)
  .set('error', error)
  .delete('tripData');

const reducer = (state = initialState , action) => {
  const fn = actionHandler[action.type];

  return fn ? fn(state, action) : state;
};

export default reducer;
