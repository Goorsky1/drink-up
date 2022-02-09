import React from 'react';
import Header from './Header';
import SurveyButton from './survey/SurveyButton';

function Wrapper() {
  return (
    <>
      <Header name="What color of beer do you choose?" />
      <SurveyButton answer="Dark (brown)" />
      <SurveyButton answer="Dark (black)" />
      <SurveyButton answer="Light (yellowish)" />
      <SurveyButton answer="Light (brownish)" />
      <SurveyButton answer="Red" />
      <SurveyButton answer="Fancy color" />
      <SurveyButton answer="Doesn't matter" />
    </>
  );
}

export default Wrapper;
