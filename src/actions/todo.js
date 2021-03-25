import todoApi from '../api/todoApi';

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const loadTodo = () => async (dispatch) => {
	try {
		dispatch({ type: FETCH_TODO_REQUEST });

		const data = await todoApi.getAll();

		dispatch({
			type: FETCH_TODO_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_TODO_ERROR,
			payload: error,
		});
	}
};
