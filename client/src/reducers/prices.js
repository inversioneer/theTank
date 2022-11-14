import { 
    LOADING_PRICES,
    GET_PRICES,
    PRICES_ERROR
} from "../actions/types";

const initialState = {
    ticker: '',
    historical: [],
    loading: true,
    error: {},
}

function priceReducer(state = initialState, action) {
    const { type, payload} = action;

    switch(type) {
        case LOADING_PRICES:
            return {
                ...state,
                loading: true
            }
        case GET_PRICES:
            return {
                ...state,
                ticker: payload.symbol,
                historical: payload.historical,
                loading: false
            }
        case PRICES_ERROR:
            return {
                ...state,
                loading: true
        }
        default:
            return state;
    }
}

export default priceReducer;