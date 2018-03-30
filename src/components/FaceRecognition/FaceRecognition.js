import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center FaceRecognition'>
			<img src={ imageUrl } width='500px' height='auto' alt='' />
		</div>
	);
};

export default FaceRecognition;