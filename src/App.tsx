import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialisedApp} from "./redux/app-reducer";
import {reducersType} from "./redux/store";

interface MyProps {
    initialisedApp: () => void
    initialized:boolean
}

class App extends React.Component<MyProps> {

    componentDidMount() {
    this.props.initialisedApp()
    }

    render() {
        if (!this.props.initialized) {return 'OOOps'}
    return (
        <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='second-wrapper'>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() =><DialogsContainer />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />
                    </div>
                </div>
        </div>
    )
}
}

const mapStateToProps = (state:reducersType) => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initialisedApp}), withRouter)(App)

