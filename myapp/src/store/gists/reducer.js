import {
  GET_GISTS_FAILURE,
  GET_GISTS_REQUEST,
  GET_GISTS_SUCCESS,
  STATUSES,
} from "./action";

const initialState = {
  gists: [],
  request: STATUSES.IDLE,
  error: null,
};
const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_GISTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gistsReducer;
