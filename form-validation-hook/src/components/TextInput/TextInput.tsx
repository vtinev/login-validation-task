import { TextInputProps } from './TextInput.interface';
import '../../styles/components/TextInput.scss';

const TextInput = ({ value, isValid, type = "text", onChange, placeholder }: TextInputProps) => {
  const containerClass = `textInput ${!isValid && "invalid"}`;

	return (
		<div className={containerClass}>
			<input 
				type={type}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
};

export default TextInput;
