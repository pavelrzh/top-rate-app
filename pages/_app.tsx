import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';


function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	router.events.on('routeChangeComplete', (url: string) => {
		if (typeof window !== 'undefined') {
			ym('hit', url);
		}
	});

	return <>
		<Head>
			<title>MyTop - best top</title>
			<link rel="icon" href="/favicon.ico" />
			<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property="og:locale" content='ru_RU' />
		</Head>
		<YMInitializer 
			accounts={[]}
			options={{ webvisor: false, defer: true }}
			version='2'
		/>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
