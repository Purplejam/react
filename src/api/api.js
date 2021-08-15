const userApi = {

	getAllUsers(currentPage, pageSize) {
		return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
			credentials: 'include'
		})
	},

	followUser(userId, method) {
		return fetch(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
			credentials: 'include',
			method: method,
			headers: {
				"API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
			}
		})

	},

	getAuth() {
		return fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {credentials: 'include'});
	},

	getProfile(user) {
		return fetch(`https://social-network.samuraijs.com/api/1.0/profile/${user}`);
	},

	loginAuth(email, password) {
		return  fetch(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
								   method: 'POST',
								   headers: {
								       "Content-Type": "application/json",
								       "API-KEY": "7ed1a18b-da95-467c-8ff8-12eb66b13f4e"
								   },
								   credentials: 'include',
								   body: JSON.stringify({
								       email: email,
								       password: password,
								       rememberMe: true
								   }) 
								})
	}

}


export const profileApi = {
	getStatus(user) {
		return fetch(`https://social-network.samuraijs.com/api/1.0/profile/status/${user}`);
	},

	updateStatus(status) {
	 return fetch(`https://social-network.samuraijs.com/api/1.0/profile/status/`, {
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