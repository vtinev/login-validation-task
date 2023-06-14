import React, { useState } from 'react'
import { IService } from './Service.interface';
import Toggle from '../Toggle/Toggle';
import Field from '../Field/Field';

const Service = ({name, toggle, fields}: IService) => {
	const [toggleStatus, setToggleStatus] = useState(toggle.defaultEnabled);

	return (
    <div className="service">
			<Toggle />

      <h4></h4>

      <div className={`fields ${toggle.visible && !toggleStatus && "disabled"}`}>
        {fields.map}
      </div>
    </div>
  );
}

export default Service;
