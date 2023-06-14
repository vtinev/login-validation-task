import React, { useState } from 'react'
import { IService } from './Service.interface';
import Toggle from '../Toggle/Toggle';
import Field from '../Field/Field';

const Service = ({name, toggle, fields}: IService) => {
	const [toggleStatus, setToggleStatus] = useState(toggle.defaultEnabled);

	return (
    <div className="service">
      {toggle.visible && (
        <Toggle />
      )}

      <h4>{name}</h4>

      <div className={`fields ${toggle.visible && !toggleStatus && "disabled"}`}>
				
      </div>
    </div>
  );
}

export default Service;
