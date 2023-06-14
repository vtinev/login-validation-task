import React, { useState } from 'react'
import { IService } from './Service.interface';
import Toggle from '../Toggle/Toggle';
import Field from '../Field/Field';

const Service = ({name, toggle, fields, inputValues, handleInputChange}: IService) => {
	const [toggleStatus, setToggleStatus] = useState(toggle.defaultEnabled);

	const handleFieldChange = (fieldId: string, value: string) => {
		handleInputChange(fieldId, value);	
	}

	return (
    <div className="service">
      {toggle.visible && (
        <Toggle
          onClick={() => {
            setToggleStatus(!toggleStatus);
          }}
          enabled={toggleStatus}
        />
      )}

      <h4>{name}</h4>

      <div className={`fields ${toggle.visible && !toggleStatus && "disabled"}`}>
        {fields.map((field, index) => (
					<div key={"field-" + index}>
						{field.type === "display" ? (
							<div className="field-display">
								<h4>{field.label}:</h4>
								<h5>{inputValues[field.connection.target] || field.placeholder}</h5>
							</div>
						) : (
							<Field
								label={field.label}
								id={field.placeholder}
								type={field.type}
								placeholder={field.placeholder}
								onChange={(ev) => handleFieldChange(field.id, ev.target.value)}
								value={inputValues[field.id]}
							/>
						)}
					</div>
				))}
      </div>
    </div>
  );
}

export default Service;
