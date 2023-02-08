import { FieldError } from "react-hook-form/dist/types";

export interface InputProps extends React.ComponentProps<'input'> {
    error?: FieldError;
}