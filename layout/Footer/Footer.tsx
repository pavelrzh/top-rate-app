import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import React from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
            <div suppressHydrationWarning>
			OwlTop © 2020 - {dayjs().format('YYYY')} Все права защищены
            </div>
            <a href='#' target='_blank'>
            Пользовательское соглашение
            </a>
            <a href='#' target='_blank'>
            Политика конфиденциальности
            </a>
        </footer>
    );
    
};