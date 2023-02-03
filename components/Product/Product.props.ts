import { ProductModel } from "../../interfaces/product.interface";

export interface ProductProps extends React.ComponentProps<'div'> {
	product: ProductModel;
}