const UpdateNewMessageBody = "UPDATE_NEW_MESSAGE_BODY";
const SendMessage = "SEND_MESSAGE";

let initialState = {
  MessangerItemArray: [
    { id: 1, name: "Maxim" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Masha" },
    { id: 4, name: "Dima" },
  ],
  MessangerTextArray: [
    { id: 1, text: "Hello, man" },
    { id: 2, text: "How are you" },
    { id: 3, text: "Okay" },
  ],
  newMessageBody: "",
};

const MessangerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UpdateNewMessageBody:
      state.newMessageBody = action.body;
      return state;
    case SendMessage:
      let body = state.newMessageBody;
      state.MessangerTextArray.push({ id: 4, text: body });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: "SEND_MESSAGE" };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: "UPDATE_NEW_MESSAGE_BODY", body: body };
};

export default MessangerPageReducer;
