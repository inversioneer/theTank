import axios from 'axios';

import {
  GET_CALENDAR,
  CALENDAR_ERROR
} from './types';

// Get earnings calendar from database and dispatch to state
export const getPosts = () => async dispatch => {//this is not set up correctly in reducers yet
  try {
      const res = await axios.get('/api/calendar');

      dispatch({
          type: GET_CALENDAR,
          payload: res.data
      });
  } catch (err) {
      dispatch({
          type: CALENDAR_ERROR,
          payload: {msg: err.response.statusText, status: err.response.status}
      });
  }
}


// put symbols in calendar database

export const putCalendar = (symbols) => async dispatch => {
    // for each line in symbols file, check if symbol is in database and add if missing
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    for (let i = 0; i < 2; i++) { //symbols.length
        try {
            const res = await axios.get(`/api/calendar/${symbols[i].symbol}`);
            if(res.data.length === 0) {
                var payload = {
                    "symbol": symbols[i].symbol,
                    "date": "1900-01-01",
                    "status": "active"
                }
                console.log(payload);
                
                try {
                    const resp = await axios.put('/api/calendar', payload, config);
                    console.log(resp);
                } catch (err) {
                    console.log('Failed to put to database')
                };
            };
            // need to clear symbols from redux or it will run twice whenever screener page is loaded

        } catch (err) {
            console.log('Failed to get data from database')
        };
    };
}