//import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
//import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
//import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessangerContainer from "./components/Messanger/MessangerContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileClassContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {authMeThunk} from "./redux/AuthReducer";
import {connect} from "react-redux";
import { initializeAppThunk} from "./redux/AppReducer";
import Loading from "./components/common/loading/loading";

function App(props) {
  useEffect(()=> {
        props.initializeAppThunk()
      }
  )
  if(!props.initialized){
    return <Loading/>
  }
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            {/* element - это компонент, который отвечает за обработку запроса по написанному маршруту(пишем в скобках компоненту как в jsx) */}
            <Route path="/Profile/:userId?" element={<ProfileContainer />} />
            <Route path="/Messanger/*" element={<MessangerContainer />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/Users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state)=>{
  return {
    initialized:state.App.initialized
  }
}
export default connect(mapStateToProps, {initializeAppThunk})(App) ;
