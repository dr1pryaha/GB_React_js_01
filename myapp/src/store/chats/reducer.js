import { ADD_CHAT, REMOVE_CHAT } from "./action.js";
const initialState = {
  chatList: [
    // {
    //   id: 1,
    //   name: "Brunch this weekend?",
    //   // messages: [{ text: "FirstMessage", author: "Ali Connors" }],
    // },
    // {
    //   id: 2,
    //   name: "Summer BBQ",
    //   // messages: [{ text: "SecondMessage", author: "Ben Aflec" }],
    // },
    // {
    //   id: 3,
    //   name: "Oui Oui",
    //   // messages: [{ text: "ThirdMessage", author: "Sarah Conor" }],
    // },
  ],
};
export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    case REMOVE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter(chat => chat.id !== action.payload),
      };
    default:
      return state;
  }
};
