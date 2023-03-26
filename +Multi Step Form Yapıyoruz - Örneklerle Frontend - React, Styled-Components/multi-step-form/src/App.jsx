import {useState} from 'react';

import SideBar from './components/SideBar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

import * as S from './components/MultiStepForm/styled';

const Steps = {
  step1: {
    component: Step1,
    title: 'Personal Info',
    subTitle: 'Please provide your name, email address, and phone number.',
    hasNextButton: true,
  },
  step2: {
    component: Step2,
    title: 'Select your plan',
    subTitle: 'You have the option of monthly or yearly billing',
    hasNextButton: true,
    hasBackButton: true,
  },
  step3: {
    component: Step3,
    title: 'Pick add-ons',
    subTitle: 'Add-ons help enhance your gaming experience.',
    hasNextButton: true,
    hasBackButton: true,
  },
  step4: {
    component: Step4,
    title: 'Finishing up',
    subTitle: 'Double-check eveything looks OK before confirming.',
    hasBackButton: true,
  },
};

function App() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });
  const [activeStep, setActiveStep] = useState('step1');
  const ActiveStep = Steps[activeStep].component;

  const handleStepSubmit = (stepId, nextStepId, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData,
    });
    setActiveStep(nextStepId);
  };

  console.log('formData:: ', formData);

  const handleBack = () => {
    const currentStepNumber = Number(activeStep.slice(-1));
    setActiveStep(`step${currentStepNumber - 1}`);
  };

  return (
    <>
      <S.StyledMultiStepForm>
        <SideBar activeStep={activeStep} />
        <ActiveStep
          {...Steps[activeStep]}
          onStepSubmit={handleStepSubmit}
          formData={formData}
          onBack={handleBack}
        />
      </S.StyledMultiStepForm>
    </>
  );
}

export default App;
