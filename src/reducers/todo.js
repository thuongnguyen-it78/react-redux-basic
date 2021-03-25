import {
	FETCH_TODO_ERROR,
	FETCH_TODO_REQUEST,
	FETCH_TODO_SUCCESS,
} from '../actions/todo';

const initialState = {
	requesting: false,
	success: false,
	message: null,
	data: null,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODO_REQUEST: {
			return {
				...state,
				requesting: true,
			};
		}
		case FETCH_TODO_SUCCESS: {
			return {
				...state,
				requesting: false,
				success: true,
				data: action.payload,
			};
		}
		case FETCH_TODO_ERROR: {
			return {
				...state,
				requesting: false,
				message: action.payload,
			};
		}
		default:
			return state;
	}
};
export default todoReducer;
