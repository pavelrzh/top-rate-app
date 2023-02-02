
export interface SortProps extends React.ComponentProps<'div'> {
    sort: SortEnum;
	setSort: (sort: SortEnum) => void
}

export enum SortEnum {
	Rating,
	Price
}