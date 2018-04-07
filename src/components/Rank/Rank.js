import React from 'react';
import './Rank.css'

const Rank = ({name, entries}) => { 
	return (
		<div>
			<div className='Rank'>
				{`${name}, your current entry count is...`}
			</div>
			<div className='RankNum'>
				{entries}
			</div>
		</div>
	);
};

export default Rank;