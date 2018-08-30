import { BUTTON_PLUS_CLICKED, BUTTON_PLUS_SUCCESS, BUTTON_PLUS_FAILURE } from "../actions/types";

export const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

export const request = (state, action) => {
    return {
        data: undefined,
        isFetching: true,
        error: false
    }
}

export const success = (state, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}

export const failure = (state, action) => {
    return {
        data: action.errData,
        isFetching: false,
        error: true
    }
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUTTON_PLUS_CLICKED:
            return request(state, action)
        case BUTTON_PLUS_SUCCESS:
            return success(state, action)
        case BUTTON_PLUS_FAILURE:
            return failure(state, action)
        default:
            return state
    }
}