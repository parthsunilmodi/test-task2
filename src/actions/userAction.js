import User from '../data/users';
import Leads from '../data/leads';

export const Type = {
  ALL_USER_DETAIL: "ALL_USER_DETAIL",
  ALL_LEADS_DETAIL: "ALL_LEADS_DETAIL",
  SET_LOADING: "SET_LOADING"
};

export const getAllUser = (cb) => async (dispatch) => {
  try {
    dispatch({ type: Type.SET_LOADING, payload: true });
    setTimeout(() => {
      dispatch({ type: Type.ALL_USER_DETAIL, payload: User || [] });
      cb(User);
      dispatch({ type: Type.SET_LOADING, payload: false });
    }, 2000);
  } catch (err) {
    console.error(err);
    dispatch({ type: Type.SET_LOADING, payload: false });
  }
};

export const getAllEmail = () => async (dispatch) => {
  try {
    dispatch({ type: Type.SET_LOADING, payload: true });
    setTimeout(() => {
      dispatch({ type: Type.ALL_LEADS_DETAIL, payload: Leads || [] });
      dispatch({ type: Type.SET_LOADING, payload: false });
    }, 2000);
  } catch (err) {
    console.error(err);
    dispatch({ type: Type.SET_LOADING, payload: false });
  }
};
