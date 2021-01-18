import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss'
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../../components/HomePage/HobbyList';
import casual from 'casual-browserify'
import { addNewHobby, setActivityHobby } from '../../actions/hobby'

/**
 * 1. store: dispatch(action), getState(), subscribe(() => {})
 * 2. reducer(initState, action), combineReducer
 * 3. action
 * 4. dispatch
 * 
 */

HomePage.propTypes = {
    
};


function HomePage(props) {

    // strict comparison
    // shallow comparion

    // promote
    // when the redux store changes so this under will be change, and compare
    // if equal so not render
    
    // state là nguyên cái redux store của mình
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    // const hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.list
    // }))

    const dispatch = useDispatch()

    function hanleRandomClick() {
        // randome a hobby
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }
    
        // action creator
    
        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    console.log(hobbyList);
    return (
        <div className="home-page">
            <h1>REDUX HOOKS HOMEPAGE</h1>
            <button onClick = {hanleRandomClick}>Random hobby</button>
            <HobbyList hobbyList = {hobbyList}/>
        </div>
    );
}

export default HomePage;