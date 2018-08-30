import { createAction } from "redux-actions";
import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILED } from "./types";

export const postLogin = createAction(POST_LOGIN)
export const postLoginSuccess = createAction(POST_LOGIN_SUCCESS)
export const postLoginFailed = createAction(POST_LOGIN_FAILED)