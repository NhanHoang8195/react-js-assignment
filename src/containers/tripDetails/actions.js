import * as EVENT from './events';

export const getTripDetails = id => (dispatch, getState) => {
  dispatch({ type: EVENT.GET_TRIP_DETAILS_START });
  const tripData = getState().homeReducer.get('tripData') || [];
  console.log(tripData);
  const tripDetails = tripData.find(t => +t.trip_id === +id);
  dispatch({
    type: EVENT.GET_TRIP_DETAILS_SUCCESS,
    payload: tripDetails,
  })
};
