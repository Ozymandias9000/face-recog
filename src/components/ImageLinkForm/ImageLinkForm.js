import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className='ImageLinkForm'>
			<p>{'This Magic Brain will detect faces!'}</p>
			<div className='center'>
				<input type='text' onChange={ onInputChange }/>
				<button onClick={ onSubmit }>Detect</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;