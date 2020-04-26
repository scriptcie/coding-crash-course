import React from 'react';
import {
  Deck,
  Heading,
  Text,
  Markdown,
  Slide,
  indentNormalizer,
} from 'spectacle';
import Code from './Code';
import Template from './Template';
import raw from 'raw.macro';
import DemoSlides from './Slides/DemoSlides';
const markdownSlides = raw('./Slides/slides.md');

const ratio = 1.5;
const theme = {
  space: ['0.5rem', '1rem', '4rem 2rem'],
  fontSizes: {
    h1: '4rem',
    h2: '3rem',
    h3: '2rem',
    text: '1.5rem',
    monospace: '1.0rem',
  },
  size: {
    width: 1366 * ratio,
    height: 768 * ratio,
    maxCodePaneHeight: 500,
  },
};

const AppDeck = () => {
  return (
    <Deck theme={theme} template={Template} transitionEffect="none" padding="3">
      <Slide padding="3">
        <Heading fontSize="h2">Coding Crash Course</Heading>
        <Code code="test" />
        <Text>Something</Text>
        <Code code="test" />
        <Text>Another thing</Text>
        <Code code="test" />
        <Heading>HOI</Heading>
      </Slide>
      <Markdown containsSlides>{markdownSlides}</Markdown>
      {DemoSlides}
    </Deck>
  );
};

export default AppDeck;
