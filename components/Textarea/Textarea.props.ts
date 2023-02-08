import { FieldError } from "react-hook-form/dist/types/errors";

export interface TextareaProps extends React.ComponentProps<'textarea'> {
    error?: FieldError;
}