import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import Profile from '../profile/Profile';
import Stockscreen from '../stockscreen/Stockscreen.js';
import Financials from '../financials/Financials.js';
import Prices from '../prices/Prices.js';
import DiscordLink from '../layout/DiscordTemp.js';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

export const Routes = () => {
  return (
    <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/profile/:id">
            <Profile/>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute exact path="/create-profile">
            <CreateProfile/>
          </PrivateRoute>
          <PrivateRoute exact path="/edit-profile">
            <EditProfile/>
          </PrivateRoute>
          <PrivateRoute exact path="/screener">
            <Stockscreen/>
          </PrivateRoute>
          <PrivateRoute exact path="/financials">
            <Financials/>
          </PrivateRoute>
          <PrivateRoute exact path="/prices">
            <Prices/>
          </PrivateRoute>
          <PrivateRoute exact path="/discord">
            <DiscordLink/>
          </PrivateRoute>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
    </section>
  )
}

export default Routes;