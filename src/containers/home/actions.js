import { request, API_URL, REQUEST_METHODS } from '../../apis';
import * as EVENT from './events';

/**
 * Async action creator. Get trips
 */
export const getTrips = () => dispatch => {
  dispatch({ type: EVENT.GET_TRIPS_START });
  const options = {
    url: API_URL.TRIPS_API,
    method: REQUEST_METHODS.GET,
  };

  return request.doRequest(options)
    .then(res => {
      dispatch({
        type: EVENT.GET_TRIPS_SUCCESS,
        payload: res.trips,
      })
    }).catch(error => {
      dispatch({
        type: EVENT.GET_TRIPS_FAILURE,
        error,
      })
    });
};
