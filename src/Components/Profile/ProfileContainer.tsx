import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from './Profile';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component <any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1049;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return(
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>

    )
    }
}
let mapStateToProps = (state:any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
