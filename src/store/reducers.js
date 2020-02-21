import { combineReducers } from 'redux';
import HomeReducer from '../containers/home/reducer';
import TripDetailsReducer from '../containers/tripDetails/reducer';

const rootReducers = combineReducers({
  homeReducer: HomeReducer,
  tripReducer: TripDetailsReducer,
});

export default rootReducers;
