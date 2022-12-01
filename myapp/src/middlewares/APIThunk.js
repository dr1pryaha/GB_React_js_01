import { API_URL_PUBLIC } from "../components/APIComponent";
import { getGistsFailure, getGistsRequest } from "../store/gists/action";

const GET_GISTS = "GISTS::GET_GISTS";
const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";

const getGists = () => ({
  type: GET_GISTS,
});

const getGistsSuccess = gists => ({
  type: GET_GISTS_SUCCESS,
  Payload: gists,
});

export const getAllGists = () => async dispatch => {
  dispatch(getGistsRequest());
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

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};
