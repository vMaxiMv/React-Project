//import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Messanger from "./components/Messanger/Messanger";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Messanger />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
