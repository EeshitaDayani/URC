import React from 'react';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import SuccessStoriesSection from './SuccessStoriesSection';
import GetInvolvedSection from './GetInvolvedSection';
import CalendarSection from './CalendarSection';

export default function SectionsWrapper() {
    return (
      <div>
        <HeroSection />
        <IntroductionSection />
        <CalendarSection />
        {/* <SuccessStoriesSection /> */}
        <GetInvolvedSection />
      </div>
    );
  }