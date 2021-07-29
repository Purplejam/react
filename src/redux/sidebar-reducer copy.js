class FriendItems {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}



let initialState = {
	friends: [
			new FriendItems('Stepan', 1),
	  new FriendItems('Vova', 2),
	  new FriendItems('Valeria', 3),
	  new FriendItems('Yulia', 4),
	  new FriendItems('Sasha', 5)
	  ]
}


const sideBarReducer = (state = initialState) => {
	return state;
    
}




export default sideBarReducer;