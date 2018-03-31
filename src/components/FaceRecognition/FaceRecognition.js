import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='relBox'>
			<div className='FaceRecognition'>
				<img id='inputImage' src={ imageUrl } width='500px' height='auto' alt='' />
				<div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow }}></div>
			</div>
		</div>
	);
};

export default FaceRecognition;