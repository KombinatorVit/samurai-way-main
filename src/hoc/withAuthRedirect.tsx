import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state:any) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component <any, any>{
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;

}