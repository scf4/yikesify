import App from 'next/app';
import { Layout } from 'components/Layout';
import '../app.css';

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>;
  }
}