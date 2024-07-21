import React from 'react';

export default function Button({ label, action }) {
	return (
		<>
			<button className='btn btn-primary my-2 mx-1' onClick={action}>
				{label}
			</button>
		</>
	);
}
