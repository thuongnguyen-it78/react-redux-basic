import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
	hobbyList: PropTypes.array,
};

HobbyList.defaultProps = {
	hobbyList: [],
};

function HobbyList(props) {
	const { hobbyList } = props;
	return (
		<ul className="hooby-list">
			{hobbyList.map(({ id, title }) => (
				<li key={id} className="hobby-item">
					{title}
				</li>
			))}
		</ul>
	);
}

export default HobbyList;
