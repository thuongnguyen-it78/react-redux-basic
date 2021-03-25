export const ADD_HOBBY = 'ADD_HOBBY';
export const SET_HOBBY = 'SET_ACTIVE_HOBBY';

export const addNewHobby = (hobby) => {
	return {
		type: ADD_HOBBY,
		payload: hobby,
	};
};

export const setActivityHobby = (hobby) => {
	return {
		type: SET_HOBBY,
		payload: hobby,
	};
};
