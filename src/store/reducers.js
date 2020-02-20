import { combineReducers } from 'redux';
import HomeReducer from '../containers/home/reducer';

const rootReducers = combineReducers({
  homeReducer: HomeReducer,
});

export default rootReducers;
