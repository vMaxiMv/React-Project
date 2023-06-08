//import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Messanger from "./components/Messanger/Messanger";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            {/* element - это компонент, который отвечает за обработку запроса по написанному маршруту(пишем в скобках компоненту как в jsx) */}
            <Route
              path="/Profile"
              element={
                <Profile
                  ProfilePage={props.state.ProfilePage}
                  appPostFunc={props.appPostFunc}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/Messanger/*"
              element={
                <Messanger
                  MessangerItemArray={
                    props.state.MessangerPage.MessangerItemArray
                  }
                  MessangerTextArray={
                    props.state.MessangerPage.MessangerTextArray
                  }
                />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
