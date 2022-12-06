import { STATUSES } from "../../middlewares/APIThunk";
import {
  GET_GISTS_FAILURE,
  GET_GISTS_SUCCESS,
  SET_GISTS_REQUEST_STATUS,
} from "./action";

const initialState = {
  gists: [],
  request: STATUSES.IDLE,
  error: null,
};
const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_GISTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    case SET_GISTS_REQUEST_STATUS:
      return {
        ...state,
        request: action.payload,
      };
    default:
      return state;
  }
};

export default gistsReducer;
