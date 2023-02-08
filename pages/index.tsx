import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, Ptag, Rating, Tag, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({menu}: HomeProps): JSX.Element {
	const[rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Ptag size='small'>Напишу сразу в двух курсах, так как проходил оба.</Ptag>
			<Ptag size='large'>Напишу сразу в двух курсах, так как проходил оба.</Ptag>
			<Ptag>Напишу сразу в двух курсах, так как проходил оба.</Ptag>
			<Tag size='small'>Ghost</Tag>
			<Tag size='medium' color='red'>Red</Tag>
			<Tag size='small' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Input placeholder="test" />
			<Textarea placeholder="test" />
		</>
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