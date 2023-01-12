import React from "react";
import { Button, Htag } from "../components";

function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Text</Htag>
			<Button appearance='primary' className="aaaaa">Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
		</>
	);
}

export default Home;
