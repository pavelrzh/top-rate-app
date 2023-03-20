import { GetStaticProps } from "next";
import React from "react";
import { Htag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import CoursesCard from "../components/CoursesCard/CoursesCard";
import styles from "../styles/home.module.css";


function Home({menu}: HomeProps): JSX.Element {

	return (
		<div>
			<div className={styles.coursesTitleMain}>Агрегатор онлайн-курсов - полный список лучших обучений онлайн.</div>
			<div className={styles.coursesTitle}>
				<Htag tag="h1">Мы поможем Вам подобрать лучший вариант.</Htag>
			</div>
			<div className={styles.coursesHeader}>
				<Htag tag="h2">Выберите категорию для поиска курса.</Htag>
			</div>
			<ul className={styles.courses}>
			{menu.map((i) => (
				<CoursesCard key={i._id.secondCategory} category={i} />
			))}
			</ul>
		</div>
	);
}

export default withLayout(Home);

export const getStaticProps:GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}