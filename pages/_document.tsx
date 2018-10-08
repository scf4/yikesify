import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { flush } from 'emotion';

export default class MyDocument extends Document<{ css: string }> {
  public static getInitialProps({ renderPage, ...props }) {

    const page = renderPage();
    const styles = extractCritical(page.html);
    // Flush to prevent leaking injectGlobals across SSR requests:
    flush();
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) __NEXT_DATA__.ids = ids;
  }

  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}