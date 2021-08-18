const baseUrl = 'https://social-network.samuraijs.com/api/1.0';

const userApi = {

	getAllUsers(currentPage, pageSize) {
		return fetch(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`, {
			credentials: 'include'
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
		return fetch(`${baseUrl}/auth/me`, {credentials: 'include'});
	},

	getProfile(user) {
		return fetch(`${baseUrl}/profile/${user}`);
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
		return fetch(`${baseUrl}/profile/status/${user}`);
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
	}

}


export default userApi