import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import React from 'react';
import cn from 'classnames';


export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
    
};