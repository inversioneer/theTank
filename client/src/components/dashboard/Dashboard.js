import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getCurrentProfile, deleteAccount} from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile, 
    deleteAccount,
    auth: {user}, 
    profile: {profile, loading}
}) => {
        useEffect(() => {
            if(user && getCurrentProfile());
        }, [user, getCurrentProfile]);
  
    return loading && profile === null ? <Spinner /> : <Fragment>
    <div class = "container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fa-solid fa-user"></i> Welcome {user && user.name}
        </p>
        <h2 class="my-2">Community Updates</h2>
        <table class="table">
        <thead>
            <tr>
            <th class="hide-sm">Date</th>
            <th class="hide-sm">Update</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="hide-sm">
                    11-13-2022
                </td>
                <td>Added Quarterly Financial Statements</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    10-11-2022
                </td>
                <td>Scheduled stock calendar updates on server</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    07-16-2022
                </td>
                <td>Added Historical Prices</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    06-22-2022
                </td>
                <td>Pushed website to development server</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    06-21-2022
                </td>
                <td>Completed Financial Statement page</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    05-07-2022
                </td>
                <td>Created Financial Statement theme</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    05-06-2022
                </td>
                <td>Created Dashboard theme</td>
            </tr>
            <tr>
                <td class="hide-sm">
                    05-06-2022
                </td>
                <td>Created index theme</td>
            </tr>
        </tbody>
        </table>
        <div className="my-2">
            <button className="btn btn-danger" onClick={()=>deleteAccount()}>
                <i className="fas fas-user-minus"></i>Delete My Account
            </button>
        </div>
    </div>

    
</Fragment>};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile, deleteAccount})(Dashboard);