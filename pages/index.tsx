import * as React from 'react';
import Head from 'next/head';

import TextBox from 'components/TextBox';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';

import { yikesify, deyikesify } from 'lib/yikesify';
import { injectGlobal } from 'emotion';

class App extends React.Component {
  state = {
    normalText: '',
    yikesText: ''
  };

  handleNormalTextChange = e => {
    const text = e.target.value.replace(/[^a-zA-Z ',.!?]/, '').toLowerCase();
    this.setState({
      normalText: text,
      yikesText: yikesify(text)
    });
  };

  handleYikesTextChange = e => {
    const text = e.target.value;
    this.setState({
      yikesText: text,
      normalText: deyikesify(text)
    });
  };

  render() {
    injectGlobal`
      html, body { background: rgb(255, 130, 14) }
    `;

    return (
      <>
        <Head>
          <title>Yikesify</title>
        </Head>
        <Heading>Yikesify</Heading>
        <div>
          <SubHeading>Normal text</SubHeading>
          <TextBox
            placeholder="Write something..."
            value={this.state.normalText}
            onChange={this.handleNormalTextChange}
          />
        </div>
        <div>
          <SubHeading>Yikes!</SubHeading>
          <TextBox
            placeholder="Or paste yikes text..."
            value={this.state.yikesText}
            onChange={this.handleYikesTextChange}
          />
        </div>
      </>
    );
  }
}

export default App;
