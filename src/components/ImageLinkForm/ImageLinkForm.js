import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div className='ImageLinkForm'>
			<p>{'This Magic Brain will detect faces!'}</p>
			<div className='center'>
				<input type='text' />
				<button>Detect</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;