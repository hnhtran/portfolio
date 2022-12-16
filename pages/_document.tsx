import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Inconsolata&family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;1,400;1,500;1,600;1,700&family=Tangerine:wght@400;700&family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gradient-to-r from-green to-blue-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
