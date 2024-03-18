/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

import { useEffect } from "react";
export default function Document() {
  let theme = "dark";
  useEffect(() => {
    theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";

  }, [theme]);
  return (
    <Html lang="en" data-bs-theme={theme}>
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="application-name"
          content="BlackRock Inu"
        />
        <meta name="author" content="BlackRock Inu" />
        <meta
          name="keywords"
          content="Blackrock, blackrock inu, bitcoin, etf, solana token"
        />
        <meta
          name="description"
          content="Discover BlackRock Inu, the ultimate fusion of memes and cryptocurrency. Join our vibrant community and explore exclusive tokenomics. Be part of the meme revolution with Peshido!"
        />

        <meta
          property="og:title"
          content="BlackRock Inu | Solana token blackrock bitcoin etf"
        />
        <meta property="og:site_name" content="Blackrock Inu" />
        <meta
          property="og:url"
          content="https://blackrockinu.tech"
        />
        <meta
          property="og:description"
          content="Explore meme tokens with blackrock inu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />


      </Head>

      <body>
        <Main />

      </body>
      <NextScript />
    </Html>
  );
}
