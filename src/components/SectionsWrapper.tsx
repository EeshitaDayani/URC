import React from 'react';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import SuccessStoriesSection from './SuccessStoriesSection';
import GetInvolvedSection from './GetInvolvedSection';

export default function SectionsWrapper() {
    return (
      <div>
        <HeroSection />
        <IntroductionSection />
        <SuccessStoriesSection />
        <GetInvolvedSection />
      </div>
    );
  }