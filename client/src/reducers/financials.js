import { 
    GET_INCOME,
    GET_CASHFLOW,
    GET_BALANCE,
    PERIOD_ANNUAL,
    PERIOD_QUARTERLY,
    INCOME_ERROR,
    CASHFLOW_ERROR,
    BALANCE_ERROR,
    INIT_STATUS,
} from "../actions/types";

const initialState = {
    income: [],
    cashflow: [],
    balance: [],
    period: "annual", //which financial statements are the default
    iloading: true,
    cloading: true,
    bloading: true,
    error: {}
}

function financialReducer(state = initialState, action) {
    const { type, payload} = action;

    switch(type) {
        case INIT_STATUS:
            return {
                ...state,
                iloading: true,
                cloading: true,
                bloading: true,
            }
        case GET_INCOME:
            return {
                ...state,
                income: payload,
                iloading: false
            }
        case GET_CASHFLOW:
            return {
                ...state,
                cashflow: payload,
                cloading: false
            }
        case GET_BALANCE:
            return {
                ...state,
                balance: payload,
                bloading: false
            }
        case PERIOD_ANNUAL:
        return {
            ...state,
            period: "year"
        }
        case PERIOD_QUARTERLY:
            return {
                ...state,
                period: "quarter"
            }
        case INCOME_ERROR:
            return {
                ...state,
                iloading: null
        }
        case CASHFLOW_ERROR:
            return {
                ...state,
                cloading: null
        }
        case BALANCE_ERROR:
            return {
                ...state,
                bloading: null
        }
        default:
            return state;
    }
}

export default financialReducer;