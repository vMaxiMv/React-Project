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
  let stateCopy; // Можно избавиться от данной переменной и сразу возвращать объект, но боюсь я потом не пойму что тут написано
  switch (action.type) {
    case UpdateNewMessageBody:
      stateCopy = { ...state, newMessageBody: action.body };
      return stateCopy;
    case SendMessage:
      let body = state.newMessageBody;
      stateCopy = {
        ...state,
        newMessageBody: "",
        MessangerTextArray: [
          ...state.MessangerTextArray,
          { id: 4, text: body },
        ],
      };
      return stateCopy;
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
