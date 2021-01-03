import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss'
import { useSelector } from 'react-redux';
import HobbyList from '../../components/HomePage/HobbyList';

HomePage.propTypes = {
    
};

function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list)

    console.log(hobbyList);
    return (
        <div className="home-page">
            <h1>REDUX HOOKS HOMEPAGE</h1>

            <HobbyList hobbyList = {hobbyList}/>
        </div>
    );
}

export default HomePage;