
export interface SortProps extends React.ComponentProps<'div'> {
    sort: SortEnum;
	setSort: (sort: Exclude<SortEnum, SortEnum.Reset>) => void
}

export enum SortEnum {
	Rating,
	Price,
	Reset
}