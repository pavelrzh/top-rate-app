import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//     children: ReactNode;
//     appearance: 'primary'|'ghost';
// }

export interface ButtonProps extends 
	Omit<React.ComponentProps<'button'>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
    children: ReactNode;
    appearance: 'primary'|'ghost';
    arrow?: 'right'|'down'|'none';
}