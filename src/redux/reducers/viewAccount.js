import { REQUEST_ACCOUNT_DETAIL, REQUEST_ACCOUNT_DETAIL_SUCCESS, REQUEST_ACCOUNT_DETAIL_FAILED } from "../actions/types";

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
        case REQUEST_ACCOUNT_DETAIL:
            return request(state, action)
        case REQUEST_ACCOUNT_DETAIL_SUCCESS:
            return success(state, action)
        case REQUEST_ACCOUNT_DETAIL_FAILED:
            return failure(state, action)
        default:
            return state
    }
}