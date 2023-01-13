import { ReactNode } from "react";

export interface PtagProps extends React.ComponentProps<'p'> {
    size?: 'small'|'medium'|'large';
    children: ReactNode;
}