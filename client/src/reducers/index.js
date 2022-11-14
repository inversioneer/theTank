import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import financials from './financials';
import prices from './prices';
import calendar from './calendar';

export default combineReducers({
    alert,
    auth,
    profile,
    financials,
    prices,
    calendar
});