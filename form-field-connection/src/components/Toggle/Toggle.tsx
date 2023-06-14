import React from 'react';

type Props = {
	enabled: boolean;
	onClick: () => void;
}

const Toggle = ({enabled, onClick}: Props) => {
	return (
		<button onClick={onClick} className={`toggle ${enabled ? "enabled" : ""}`}>
			Toggle
		</button>
	)
}

export default Toggle;
