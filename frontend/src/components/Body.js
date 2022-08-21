import React from 'react';

function Body({page}) {
	return (
		<div className="body">{page()}</div>
	)
}

export default Body;