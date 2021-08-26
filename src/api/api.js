export const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

export const userApi = {

	getAllUsers(currentPage, pageSize) {
		return fetch(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`, {
			credentials: 'include',
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		})
	},

	followUser(userId, method) {
		return fetch(`${baseUrl}/follow/${userId}`, {
			credentials: 'include',
			method: method,
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		})

	},

	getAuth() {
		return fetch(`${baseUrl}/auth/me`, {
			credentials: 'include',
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		});
	},

	getProfile(user) {
		return fetch(`${baseUrl}/profile/${user}`, {
			credentials: 'include',
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		});
	},

	loginAuth(email, password, rememberMe) {
		return  fetch(`${baseUrl}/auth/login`, {
								   method: 'POST',
								   headers: {
								       "Content-Type": "application/json",
								       "API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
								   },
								   credentials: 'include',
								   body: JSON.stringify({
								       email: email,
								       password: password,
								       rememberMe: rememberMe
								   }) 
								})
	},

	logout() {
		return  fetch(`${baseUrl}/auth/login`, {
			method: 'DELETE'
		})
	}



}


export const profileApi = {
	getStatus(user) {
		return fetch(`${baseUrl}/profile/status/${user}`, {
			credentials: 'include',
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		});
	},

	updateStatus(status) {
	 return fetch(`${baseUrl}/profile/status/`, {
     method: 'PUT',
     headers: {
         "Content-Type": "application/json",
         "API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
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
    "API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		})
	}

}


export default userApi