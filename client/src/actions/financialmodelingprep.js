import axios from 'axios';
import { previousDay } from 'date-fns';

import {
    INIT_STATUS,
    GET_SYMBOLS,
    SYMBOLS_ERROR,
    GET_INCOME,
    GET_CASHFLOW,
    GET_BALANCE,
    PERIOD_QUARTERLY,
    PERIOD_ANNUAL,
    INCOME_ERROR,
    CASHFLOW_ERROR,
    BALANCE_ERROR,
    LOADING_PRICES,
    GET_PRICES,
    PRICES_ERROR,
    GET_CALENDAR,
    CALENDAR_ERROR
} from './types';

// initialize loading state

export const initStatus = () => dispatch => {
    dispatch({
        type: INIT_STATUS
    });
};

// retrieve income statement from Financial Modeling Prep API

export const getIncome = (ticker, period) => async dispatch => {
    try {

        const res = await axios.get(`/api/financialmodelingprep/income/${ticker}/${period}`);

        dispatch({
            type: GET_INCOME,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: INCOME_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

// retrieve cashflow statement from Financial Modeling Prep API

export const getCashflow = (ticker, period) => async dispatch => {
    try {
        
        const res = await axios.get(`/api/financialmodelingprep/cashflow/${ticker}/${period}`);

        dispatch({
            type: GET_CASHFLOW,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CASHFLOW_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}
// retrieve balance sheet from Financial Modeling Prep API

export const getBalance = (ticker, period) => async dispatch => {
    try {
        const res = await axios.get(`/api/financialmodelingprep/balance/${ticker}/${period}`);

        dispatch({
            type: GET_BALANCE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: BALANCE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Change to quarterly financial statements
export const quarterlyStatements = () => dispatch => {
    dispatch({ type: PERIOD_QUARTERLY});
   };

// Change to annual financial statements
export const annualStatements = () => dispatch => {
    dispatch({ type: PERIOD_ANNUAL});
   };

// retrieve daily prices from Financial Modeling Prep API
export const getPrices = ticker => async dispatch => {
    dispatch({
        type: LOADING_PRICES
    });
    try {
        const res = await axios.get(`/api/financialmodelingprep/prices/${ticker}`);

        dispatch({
            type: GET_PRICES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PRICES_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Get NYSE tradeable symbols from Financial Modeling Prep API

export const getTradeableSymbols = () => async dispatch => {
    try {

        const res = await axios.get('/api/financialmodelingprep/tradeableSymbols');

        const symArray = [];
        res.data.map(e => {
            if(e.exchangeShortName === "NYSE") {
                return symArray.push({
                    "symbol": e.symbol
                })
            } else {
                return null;
            }
        });

        dispatch({
            type: GET_SYMBOLS,
            payload: symArray
        });

    } catch (err) {
        dispatch({
            type: SYMBOLS_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}