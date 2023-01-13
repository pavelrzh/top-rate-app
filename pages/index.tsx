import React from "react";
import { Button, Htag } from "../components";

function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary'arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
		</>
	);
}

export default Home;
