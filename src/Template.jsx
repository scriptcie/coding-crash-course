import React from 'react';
import styled, { css } from 'styled-components';
import ProgressNumber from './Progress';
import { FlexBox, FullScreen, Heading } from 'spectacle';
import { useLanguage, LANGUAGES } from './Providers/LanguageProvider';

const LanguageChoice = styled.button`
  border: none;
  margin: 0 0.5em;
  padding: 0.5em;
  border-radius: 1px;

  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.tertiary};
  ${({ active, theme }) =>
    active &&
    css`
      color: white;
      background: ${theme.colors.secondary};
    `}
`;

const SelectLanguage = () => {
  const { language, selectLanguage } = useLanguage();
  const LanguageButton = ({ lang, children }) => (
    <LanguageChoice
      onClick={() => selectLanguage(lang)}
      active={lang === language}
    >
      {children}
    </LanguageChoice>
  );

  return (
    <div style={{ pointerEvents: 'all' }}>
      <LanguageButton lang={LANGUAGES.JULIA}>Julia</LanguageButton>
      <LanguageButton lang={LANGUAGES.PYTHON}>Python</LanguageButton>
      <LanguageButton lang={LANGUAGES.JAVASCRIPT}>JavaScript</LanguageButton>
    </div>
  );
};

const FlexColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position="absolute"
width: 100%;
height: 100%;
left: 0;
top: 0;
padding:1em;
`;

const Template = (props) => {
  return (
    <FlexColumn>
      <FlexBox justifyContent="space-between">
        <Heading margin="0px" padding="0px" fontSize="h6">
          Coding Crash Course
        </Heading>
        <SelectLanguage />
      </FlexBox>
      <FlexBox justifyContent="space-between">
        <FullScreen />
        <ProgressNumber {...props} />
      </FlexBox>
    </FlexColumn>
  );
};

export default Template;
