//import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessangerContainer from "./components/Messanger/MessangerContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            {/* element - это компонент, который отвечает за обработку запроса по написанному маршруту(пишем в скобках компоненту как в jsx) */}
            <Route path="/Profile" element={<Profile store={props.store} />} />
            <Route
              path="/Messanger/*"
              element={
                <MessangerContainer
                  // MessangerItemArray={
                  //   props.state.MessangerPage.MessangerItemArray
                  // }
                  // MessangerTextArray={
                  //   props.state.MessangerPage.MessangerTextArray
                  // }
                  store={props.store}
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
