import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import TextBox from 'components/TextBox';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';

import { yikesify, deyikesify } from 'lib/yikesify';

const Yikesify = () => {
  const [normalText, setNormalText] = useState('');
  const [yikesText, setYikesText] = useState('');

  const handleNormalTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const sanitizedText = text.replace(/[^a-zA-Z ',.!?]/, '').toLowerCase();

    setNormalText(sanitizedText);
    setYikesText(yikesify(text));
  };

  const handleYikesTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setNormalText(deyikesify(text));
    setYikesText(text);
  };

  return <>
    <Background />
    
    <Head>
      <title>Yikesify</title>
    </Head>

    <Heading>Yikesify</Heading>

    <div>
      <SubHeading>Normal text</SubHeading>
      <TextBox
        placeholder="Write something..."
        value={normalText}
        onChange={handleNormalTextChange}
      />
    </div>

    <div>
      <SubHeading>Yikes!</SubHeading>
      <TextBox
        placeholder="Or paste yikes text..."
        value={yikesText}
        onChange={handleYikesTextChange}
      />
    </div>
  </>;
};

const Background = createGlobalStyle`
  html, body {
    background: rgb(255, 130, 14);
  }
`;

export default Yikesify;
