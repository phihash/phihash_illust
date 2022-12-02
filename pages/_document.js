import Document, { Head, Html, Main, NextScript } from "next/document";

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <title>phihash-illust</title>

        <meta property="og:description" content="phihashのイラストサイト" />
        <meta property="og:site_name" content="phihash-illust" />
        <meta property="og:image" content="hero.PNG" />
        <link rel="apple-touch-icon" href="apple.PNG" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+JP:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
