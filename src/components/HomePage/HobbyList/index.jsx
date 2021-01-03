import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
};

HobbyList.defaultProps = {
    hobbyList: []
}

function HobbyList(props) {
    const { hobbyList } = props
    return (
        <ul className = "hooby-list">
            {
                hobbyList.map(hobby => (
                    <li className="hobby-item">
                        {hobby}
                    </li>
                ))
            }
        </ul>
    )
}

export default HobbyList;