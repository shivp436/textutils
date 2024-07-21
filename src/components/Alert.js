// Alert.js
import React from 'react';

function Alert({ alert }) {
	return (
		alert && (
			<div className='container mt-2'>
				<div
					className={`alert alert-${alert.type} alert-dismissible fade show`}
					role='alert'
				>
					<strong>{alert.type}: </strong> {alert.message}
				</div>
			</div>
		)
	);
}

export default Alert;
