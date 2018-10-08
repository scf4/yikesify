import * as React from 'react';
import Head from 'next/head';

import TextBox from 'components/TextBox';
import Heading from 'components/Heading';

import lemgthify from 'lib/lemgthify';
import { injectGlobal } from 'emotion';

class App extends React.Component {
  state = {
    text: ''
  };

  handleTextChange = e => {
    this.setState({ text: lemgthify(e.target.value) });
  };

  render() {
    injectGlobal`
      html, body { background: rgb(60, 120, 10) }
    `;

    return (
      <>
        <Head>
          <title>Lemgthify</title>
        </Head>
        <Heading>Lemgthify</Heading>
        <div>
          <TextBox
            placeholder="Write somethimg..."
            value={this.state.text}
            onChange={this.handleTextChange}
            lomg
          />
        </div>
      </>
    );
  }
}

export default App;
