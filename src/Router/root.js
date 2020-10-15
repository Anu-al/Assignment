import React from 'react'
import {Route,BrowserRouter, Switch, Link} from 'react-router-dom'

import App from '../App'
import UserDetails from '../UserCard/profileDetails/profileDetails'
import UserCardList from '../UserCard/userCard'
import history from './History'



const Root = () => {
    return(
        <div>
            <Switch>
            <Route component={App} path="/" exact/>
            <Route component={UserCardList} path="/userCardList" />
            <Route component={UserDetails} path="/profile" />
            </Switch>
        </div>
    )
}
export default Root