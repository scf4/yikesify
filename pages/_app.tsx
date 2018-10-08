import NextApp, { Container } from 'next/app';
import { hydrate, injectGlobal } from 'react-emotion';

import Layout from 'components/Layout';

// hydrate emotion.js data on the server
if (typeof window !== 'undefined') {
  hydrate((window as any).__NEXT_DATA__.ids);
}

export default class MyApp extends NextApp {
  public render() {
    injectGlobal`
      body {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        font-size: 16px;
      }

      html, body {
        background: white;
      }

      * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;

    const { Component, pageProps } = this.props as any;
    return <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>;
  }
}