import { FormField } from "../Field/Field.interface";

export type IService = {
	name: string;
	toggle: ServiceToggle;
	fields: ServiceField[];
}

// interface ServiceField here
// Use extend

export type ServiceToggle = {
	enabled?: boolean;
	switch?: () => void;
	visible: boolean;
	defaultEnabled: boolean;
}

type FieldConnection = {
	target: string;
}
