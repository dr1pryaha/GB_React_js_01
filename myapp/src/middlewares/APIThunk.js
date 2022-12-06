import { API_URL_PUBLIC } from "../components/APIComponent";
import {
  getGistsFailure,
  getGistsSuccess,
  setGistsRequestStatus,
} from "../store/gists/action";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const getAllGists = () => async dispatch => {
  dispatch(setGistsRequestStatus(STATUSES.REQUEST));
  try {
    const res = await fetch(API_URL_PUBLIC);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getGistsSuccess(result));
  } catch (err) {
    dispatch(getGistsFailure(err.message));
  }
};
