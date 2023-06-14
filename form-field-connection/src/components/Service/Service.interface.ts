import { FormField } from "../Field/Field.interface";

export type IService = {
	name: string;
	toggle: ServiceToggle;
	fields: ServiceField[];
	inputValues: any;
	handleInputChange: (fieldId: string, value: string) => void;
}

interface ServiceField extends FormField {
	connection: FieldConnection;
}

export type ServiceToggle = {
	enabled?: boolean;
	switch?: () => void;
	visible: boolean;
	defaultEnabled: boolean;
}

type FieldConnection = {
	target: string;
}
