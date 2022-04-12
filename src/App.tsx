import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialisedApp} from "./redux/app-reducer";
import {reducersType} from "./redux/store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                        <Route path='/profile/:userId' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() =><DialogsContainer />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />
                        </React.Suspense>
                    </div>
                </div>
        </div>
    )
}
}

const mapStateToProps = (state:reducersType) => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initialisedApp}), withRouter)(App)

