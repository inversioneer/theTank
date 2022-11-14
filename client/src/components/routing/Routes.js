import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
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
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/add-experience" component={AddExperience} />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <PrivateRoute exact path="/screener" component={Stockscreen} />
          <PrivateRoute exact path="/financials" component={Financials} />
          <PrivateRoute exact path="/prices" component={Prices} />
          <PrivateRoute exact path="/discord" component={DiscordLink} />
          <Route component={NotFound}/>
        </Switch>
    </section>
  )
}

export default Routes;