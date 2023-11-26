import i18nextConfig from "../next-i18next.config";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

class AppDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <Script crossOrigin strategy='beforeInteractive' src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js"></Script>
          <Script crossOrigin strategy='beforeInteractive' src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
