import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import TextBox from 'components/TextBox';
import Heading from 'components/Heading';
import lemgthify from 'lib/lemgthify';

const Background = createGlobalStyle`
  html, body {
    background: rgb(60, 120, 10);
  }
`;

const Lemgthify = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(lemgthify(e.target.value));
  };

  return <>
    <Background />
    
    <Head>
      <title>Lemgthify</title>
    </Head>

    <Heading>Lemgthify</Heading>

    <div>
      <TextBox
        placeholder="Write somethimg..."
        value={text}
        onChange={handleTextChange}
        lomg
      />
    </div>
  </>;
};

export default Lemgthify;
