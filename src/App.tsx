import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer/>
              <div className='second-wrapper'>
                  <Navbar/>
                  <div className='app-wrapper-content'>
                      {/*<Routes>*/}
                      {/*в новой версии вместо render element и не стрелочная функция, а просто компонета*/}
                          <Route path='/profile/:userId'
                                 render={() => <ProfileContainer />} />
                          <Route path='/dialogs'
                                 render={() =><DialogsContainer />} />
                          <Route path='/users'
                                 render={() => <UsersContainer />} />
                          <Route path='/login'
                             render={() => <Login />} />
                      {/*</Routes>*/}
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}
export default App;

