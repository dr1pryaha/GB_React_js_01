import { CHANGE_NAME } from "./action";

const initialState = {
  showName: false,
  name: "Default",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
