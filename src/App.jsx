import { useEffect, useMemo, useState } from 'react';
import { useForm, FormProvider, useFormContext, useWatch } from 'react-hook-form';
import Container from './components/Container';
import Form from './components/Form';
import RightContainer from './components/RightContainer';
import Stepper from './components/Stepper';
import Summary from './components/Summary';
import DeliveryDetailStep from './form/DeliveryDetailStep';
import ShipmentStep from './form/ShipmentStep';
import ThanksPageStep from './form/ThanksPageStep';
import useMultistep from './utils/useMultistep';

const backPageStep = ["Cart", "Delivery"]
const defaultValue = {
  goods: 500000, dropshipFee: 0, 'Send as dropshipper': false, Shipment: { label: '', estimation: '', price: 0 }
}

function App() {
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
    console.log(data)
    localStorage.setItem('itemSaved', JSON.stringify(data));
    if (isLastStep) return localStorage.removeItem('itemSaved');
  }, [data, currentStepIndex])

  return (
    <Container>
      <FormProvider {...methods} >
        <Form next={next} isLastStep={isLastStep}>
          <>
            <Stepper currentStep={currentStepIndex + 1} />
            {!isLastStep && (
              <button type="button" onClick={back}>
                Back to {backPageStep[currentStepIndex]}
              </button>
            )}
            {step}
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '.5rem',
                justifyContent: 'flex-end',
              }}
            >

            </div>
          </>
          <RightContainer>
            <Summary />
            {!isLastStep && <button type="submit">{currentStepIndex !== steps.length - 2 ? 'Continue to Payment' : data.Payment ? `Pay with ${data.Payment}` : 'Pay'}</button>}

          </RightContainer>
        </Form>
      </FormProvider>
    </Container>
  );
}

export default App;
