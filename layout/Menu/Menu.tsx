import styles from './Menu.module.css';
import React, { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './Icons/courses.svg';
import BooksIcon from './Icons/books.svg';
import ServicesIcon from './Icons/services.svg';
import ProductsIcon from './Icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
	{route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const Menu = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span>
										{m.name}
									</span>
								</div>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened 
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);	
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
					<Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: false
					})}>
						{p.category}
					</Link>
			))
		);
	};

    return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
    );
    
};