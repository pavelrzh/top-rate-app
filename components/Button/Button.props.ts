import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
//     children: ReactNode;
//     appearance: 'primary'|'ghost';
// }

export interface ButtonProps extends React.ComponentProps<'button'> {
    children: ReactNode;
    appearance: 'primary'|'ghost';
    arrow?: 'right'|'down'|'none';
}