import { ButtonProps } from "./Button.interface";

const Button = ({label, isDisabled}: ButtonProps) => {
	return (
		<button type="button" disabled={isDisabled}>
			{label}
		</button>
	)
}

export default Button;
