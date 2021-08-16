import Head from 'next/head'

export default function MyHead({title, desc, url, img}) {
    let baseUrl = "https://next-livestream.vercel.app";
    return (
        <Head>
            <title>{title} - Livestream</title>
            <meta name="description" content={desc} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:url" content={baseUrl + url} />
            <meta name="twitter:image" content={baseUrl + img} />
            <meta property="og:url" content={baseUrl + url} />
            <meta property="og:image" content={baseUrl + img} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <link rel="icon" type="image/png" sizes="512x512"  href="/icons/favicon.png"></link>
            <link rel="manifest" href="manifest.json"></link>
        </Head>
    );
}