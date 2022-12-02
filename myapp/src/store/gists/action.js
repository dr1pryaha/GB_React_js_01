export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";
export const SET_GISTS_REQUEST_STATUS = "GISTS:: SET_GISTS_REQUEST_STATUS";

export const getGistsSuccess = data => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});
export const getGistsFailure = err => ({
  type: GET_GISTS_FAILURE,
  payload: err,
});
export const setGistsRequestStatus = status => ({
  type: SET_GISTS_REQUEST_STATUS,
  payload: status,
});
