import React from 'react'
import { FormField } from './Field.interface';

const Field = ({label, type, id, placeholder, value, onChange}: FormField) => {
	return (
		<div className='field'>
			<label htmlFor={id}>{label}</label>

			<input type={type} onChange={onChange} id={id} value={value} placeholder={placeholder} />
		</div>
	)
}

export default Field;
