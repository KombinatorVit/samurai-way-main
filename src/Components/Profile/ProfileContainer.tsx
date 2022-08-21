import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from './Profile';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component <any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response:any) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state:any) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);