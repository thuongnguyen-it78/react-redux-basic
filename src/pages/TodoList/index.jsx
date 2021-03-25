import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TodoList.scss';
import { loadTodo } from '../../actions/todo';

TodoList.propTypes = {};

function TodoList() {
	const { requesting, data } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	console.log(requesting, data);

	useEffect(() => {
		dispatch(loadTodo());
	}, []);

	return (
		<div>
			{requesting ? (
				<h1>Loading...</h1>
			) : data && data.length > 0 ? (
				<div>
					<ul className="list-group">
						{data.map((item) => (
							<li key={item.id} className="list-group-item">
								{item.title}
							</li>
						))}
					</ul>
				</div>
			) : (
				<div>Data is empty</div>
			)}
		</div>
	);
}

export default TodoList;
