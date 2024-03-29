import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://mc.yandex.ru" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;