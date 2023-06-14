import { ChangeEvent } from "react";

export interface TextInputProps {
  value?: string;
  isValid?: boolean;
  type?: string;
  placeholder?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
}
