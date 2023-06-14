import { ChangeEvent } from "react";

export interface FormField {
	label: string;
	type: string;
	id: string;
	placeholder: string;
	value?: string;
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
}
