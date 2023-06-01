import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const MyPostArray = [
  { id: 1, message: "Hello, guys", likes: "30" },
  { id: 2, message: "Bye", likes: "12" },
];

const MessangerItemArray = [
  { id: 1, name: "Maxim" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Masha" },
];
const MessangerTextArray = [
  { id: 1, text: "Hello, man" },
  { id: 2, text: "How are you" },
  { id: 3, text: "Okay" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      MyPostArray={MyPostArray}
      MessangerItemArray={MessangerItemArray}
      MessangerTextArray={MessangerTextArray}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
