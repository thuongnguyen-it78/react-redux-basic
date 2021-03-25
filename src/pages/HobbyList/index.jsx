import casual from 'casual-browserify';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../../actions/hobby';
import HobbyList from '../../common/HobbyList';
import './HobbyList.scss';

/**
 * 1. store: dispatch(action), getState(), subscribe(() => {})
 * 2. reducer(initState, action), combineReducer
 * 3. action
 * 4. dispatch
 *
 */

HomePage.propTypes = {};

function HomePage(props) {
	// strict comparison
	// shallow comparion

	// promote
	// when the redux store changes so this under will be change, and compare
	// if equal so not render

	// state là nguyên cái redux store của mình
	const hobbyList = useSelector((state) => state.hobby.list);

	// const hobbyState = useSelector(state => ({
	//     list: state.hobby.list,
	//     activeId: state.hobby.list
	// }))

	const dispatch = useDispatch();

	function hanleRandomClick() {
		// randome a hobby
		const newHobby = {
			id: casual.uuid,
			title: casual.title,
		};

		// action creator

		const action = addNewHobby(newHobby);
		dispatch(action);
	}

	console.log(hobbyList);
	return (
		<div className="home-page">
			<h1>REDUX HOOKS HOMEPAGE</h1>

			<button onClick={hanleRandomClick}>Random hobby</button>
			<HobbyList hobbyList={hobbyList}></HobbyList>
		</div>
	);
}

export default HomePage;
