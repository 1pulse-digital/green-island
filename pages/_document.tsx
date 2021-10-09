import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const isDev = process?.env.NODE_ENV === "development";

    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={isDev ? "debug-screens" : ""}>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
