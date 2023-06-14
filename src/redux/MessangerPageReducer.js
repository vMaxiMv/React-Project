const UpdateNewMessageBody = "UPDATE_NEW_MESSAGE_BODY";
const SendMessage = "SEND_MESSAGE";

const MessangerPageReducer = (state, action) => {
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
