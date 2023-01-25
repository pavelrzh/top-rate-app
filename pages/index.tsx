import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
	const[rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Ptag size='small'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Ptag size='large'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Ptag>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Tag size='small'>Ghost</Tag>
			<Tag size='medium' color='red'>Red</Tag>
			<Tag size='small' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			
		</>
	);
}

export default withLayout(Home);

export const getStaticProps:GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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