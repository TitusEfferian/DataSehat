import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILED } from "../actions/types";

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
        ...state,isFetching:false,data:action.globalData.data
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
        case POST_LOGIN:
            return request(state, action)
        case POST_LOGIN_SUCCESS:
            return success(state,action)
        case POST_LOGIN_FAILED:
            return failure(state, action)
        default:
            return state
    }
}