import React from "react";
import { Button, Htag, Ptag, Tag } from "../components";

function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary'arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Ptag size='small'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Ptag size='large'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Ptag>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании.</Ptag>
			<Tag size='small'>Ghost</Tag>
			<Tag size='medium' color='red'>Red</Tag>
			<Tag size='small' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
		</>
	);
}

export default Home;
