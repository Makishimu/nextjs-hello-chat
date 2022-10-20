import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const title = 'Simple chat app';
const description = 
'Just simple chat. We did it together, Maksim, Vladimir and Olga';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, minimal-ui" />
        <title key="title">{title}</title>
        <meta
          key="meta-title"
          name="title"
          content={description}
        />
        <meta
          key="meta-description"
          name="description"
          content={description}
        />
        <meta
          key="meta-og-title"
          property="og:title"
          content={title}
        />
        <meta
          key="meta-og-description"
          property="og:description"
          content={description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
    </Head>
     <Component {...pageProps} />
    </>
 
  )
}

export default MyApp
