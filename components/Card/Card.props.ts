import { ReactNode } from "react";

export interface CardProps extends React.ComponentProps<'div'> {
    color?: 'white'|'blue';
	// size?: 'small'|'medium'|'large';
    children: ReactNode;
}