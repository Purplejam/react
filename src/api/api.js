export const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

const APIKey = "7ed1a18b-da95-467c-8ff8-12eb66b13f4e";

export const userApi = {

	getAllUsers(currentPage, pageSize) {
		return fetch(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`, {
			credentials: 'include',
			headers: {
				"API-KEY": APIKey
			}
		})
	},

	followUser(userId, method) {
		return fetch(`${baseUrl}/follow/${userId}`, {
			credentials: 'include',
			method: method,
			headers: {
				"API-KEY": APIKey
			}
		})

	},

	getAuth() {
		return fetch(`${baseUrl}/auth/me`, {
			credentials: 'include',
			headers: {
				"API-KEY": APIKey
			}
		});
	},

	getProfile(user) {
		return fetch(`${baseUrl}/profile/${user}`, {
			credentials: 'include',
			headers: {
				"API-KEY": APIKey
			}
		});
	},

	loginAuth(email, password, rememberMe, captcha) {
		
		return  fetch(`${baseUrl}/auth/login`, {
								   method: 'POST',
								   headers: {
								       "Content-Type": "application/json",
								       "API-KEY": APIKey
								   },
								   credentials: 'include',
								   body: JSON.stringify({
								       email: email,
								       password: password,
								       rememberMe: rememberMe,
								       captcha: captcha
								   }) 
								})
	},

	logout() {
		return  fetch(`${baseUrl}/auth/login`, {
			method: 'DELETE'
		})
	},

	getCaptcha() {
		return fetch(`${baseUrl}/security/get-captcha-url`)
	}



}


export const profileApi = {
	getStatus(user) {
		return fetch(`${baseUrl}/profile/status/${user}`, {
			credentials: 'include',
			headers: {
				"API-KEY": APIKey
			}
		});
	},

	updateStatus(status) {
	 return fetch(`${baseUrl}/profile/status/`, {
     method: 'PUT',
     headers: {
         "Content-Type": "application/json",
         "API-KEY": APIKey
     },
     credentials: 'include',
     body: JSON.stringify({
         status: status
     }) 
 })
	}, 

		uploadPhoto(file) {
		let formData = new FormData();
		formData.append('file', file[0]);

		return  fetch(`${baseUrl}/profile/photo`, {
			method: 'PUT',
			credentials: 'include',
			body: formData,
   headers: {
    "API-KEY": APIKey
			}
		})
	},

	setProfilePageApi(userId, values) {
		  return fetch(`https://social-network.samuraijs.com/api/1.0/profile`, {
		  method: 'PUT',
		  headers: {
		      "Content-Type": "application/json",
		      "API-KEY": APIKey
		  },
		  credentials: 'include',
		  body: JSON.stringify({
		      userId: userId,
		      fullName: values.fullName,
		      lookingForAJob: values.lookingForAJob,
		      lookingForAJobDescription: values.lookingForAJobDescription,
		      aboutMe: values.aboutMe,
		      contacts: {
		         github: values.github,
		         vk: values.vk,
		         facebook: values.facebook,
		         instagram: values.instagram,
		         twitter: values.twitter,
		         website: values.website,
		         youtube: values.youtube,
		         mainLink: values.mainLink
		      }
		  }) 
		})
	}

}


export default userApi