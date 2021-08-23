import React from 'react';
import {Route} from 'react-router-dom';
import preloader from './../assets/images/preloader.gif';


export const WithSuspense = (Component) => {

	return (props) => {

		return (
				<React.Suspense fallback={<img src={preloader}/>}>
					<Component {...props}/>	
				</React.Suspense>)
	}
}