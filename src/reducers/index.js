import { combineReducers } from 'redux';
import periodicosReducer from './periodicosReducer';

export default combineReducers({
    periodicos: periodicosReducer
});
