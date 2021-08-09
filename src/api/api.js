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
	}

}


export default userApi