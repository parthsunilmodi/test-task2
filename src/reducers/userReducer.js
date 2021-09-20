import { handleActions } from "redux-actions";

import * as AuthActions from "../actions/userAction";

const initialState = {
  users: localStorage.getItem('users') || [],
  leads: localStorage.getItem('leads') || [],
  loading: false,
};

export const userReducer = handleActions(
  {
    [AuthActions.Type.ALL_USER_DETAIL]: (state, action) => {
      localStorage.setItem('users', JSON.stringify(action.payload || []));
      return {
        ...state,
        verifyUser: action.payload || [],
      }
    },
    [AuthActions.Type.ALL_LEADS_DETAIL]: (state, action) => {
      return {
        ...state,
        leads: action.payload,
      }
    },
    [AuthActions.Type.SET_LOADING]: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      }
    },
  },
  initialState
);
