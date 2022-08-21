import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from './Profile';


class ProfileContainer extends React.Component <any, any>{

    componentDidMount() {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);