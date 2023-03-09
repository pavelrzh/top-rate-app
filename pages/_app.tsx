import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';


function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - best top</title>
			<link rel="icon" href="/favicon.ico" />
			<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property="og:locale" content='ru_RU' />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
