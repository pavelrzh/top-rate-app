import { ReactNode } from "react";

export interface TagProps extends React.ComponentProps<'div'> {
    size?: 'small'|'medium';
    children: ReactNode;
    color?: 'ghost'| 'red'|'grey'| 'green'|'primary';
    href?: string; 
}