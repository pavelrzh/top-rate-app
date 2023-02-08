import { ReviewModel } from "../../interfaces/product.interface";

export interface ReviewProps extends React.ComponentProps<'div'> {
    review: ReviewModel;
}