import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import React from 'react';


let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});


export const WithAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component {
		render() {

			if(!this.props.isAuth) return <Redirect to="/login"/>

			return <Component {...this.props}/>

		}
	}

	let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectAuthRedirectComponent;
}