import { useEffect, useMemo, useState } from 'react';
import { useForm, FormProvider, useFormContext, useWatch } from 'react-hook-form';
import BackPageButton from './components/BackPageButton';
import Container from './components/Container';
import Form from './components/Form';
import MainContainer from './components/MainContainer';
import RightContainer from './components/RightContainer';
import Stepper from './components/Stepper';
import Summary from './components/Summary';
import DeliveryDetailStep from './form/DeliveryDetailStep';
import ShipmentStep from './form/ShipmentStep';
import ThanksPageStep from './form/ThanksPageStep';
import useMultistep from './utils/useMultistep';
import styled from "styled-components";
import PayButton from './components/PayButton';


const backPageStep = ["Cart", "Delivery"]
const defaultValue = {
  goods: 500000, dropshipFee: 0, sendAsDropshipper: false, shipment: { label: '', estimation: '', price: 0 }
}

const Splitter = styled.div`
    border-bottom: 1px solid #D8D8D8;
    mix-blend-mode: normal;
    margin: 1.25rem 0rem;
    margin-top: 2rem;


    @media only screen and (min-width: 800px) {
      border-left: 1px solid #FF8A00;
      opacity: 0.2;
      margin-top: 0rem;

    }
`

const App = () => {
  const methods = useForm({
    defaultValues: useMemo(() => {
      const itemSaved = JSON.parse(localStorage.getItem('itemSaved'))
      if (itemSaved) return itemSaved
      return defaultValue
    }, [defaultValue])
  });
  const data = methods.watch();
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistep([
      <DeliveryDetailStep />,
      <ShipmentStep />,
      <ThanksPageStep />,
    ]);

  useEffect(() => {
    // console.log(data)
    localStorage.setItem('itemSaved', JSON.stringify(data));
    if (isLastStep) return localStorage.removeItem('itemSaved');
  }, [data, currentStepIndex])

  return (
    <Container>
      <FormProvider {...methods} >
        <Stepper currentStep={currentStepIndex + 1} />
        {!isLastStep && (
          <BackPageButton back={back}>
            <i className='bx bx-left-arrow-alt'></i>
            Back to {backPageStep[currentStepIndex]}
          </BackPageButton>
        )}
        <Form next={next} isLastStep={isLastStep}>
          <MainContainer step={currentStepIndex}>
            {step}
          </MainContainer>

          <Splitter />

          <RightContainer>
            <Summary />
            {!isLastStep && <PayButton>{currentStepIndex !== steps.length - 2 ? 'Continue to Payment' : data.payment ? `Pay with ${data.payment}` : 'Pay'}</PayButton>}

          </RightContainer>
        </Form>
      </FormProvider>
    </Container>
  );
}

export default App;
