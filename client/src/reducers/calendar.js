import { 
    GET_SYMBOLS,
    SYMBOLS_ERROR,
    GET_CALENDAR,
    CALENDAR_ERROR
} from "../actions/types";

const initialState = {
    symbols: [],
    symloading: true,
    calendar: []
}

function calendarReducer(state = initialState, action) {
    const { type, payload} = action;

    switch(type) {
        case GET_SYMBOLS:
            return {
                ...state,
                symbols: payload,
                symloading: false
            }
        case SYMBOLS_ERROR:
            return {
                ...state,
                symloading: null
        }
        case GET_CALENDAR:
            return {
                ...state,
                calendar: payload,
            }
        case CALENDAR_ERROR:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default calendarReducer;