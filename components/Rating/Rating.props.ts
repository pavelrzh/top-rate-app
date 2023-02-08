import { FieldError } from "react-hook-form";

export interface RatingProps extends React.ComponentProps<'div'> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
	error?: FieldError;
}