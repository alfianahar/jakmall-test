import { useEffect, useMemo, useState } from 'react';
import { useForm, FormProvider, useFormContext, useWatch } from 'react-hook-form';
import Summary from './components/Summary';
import DeliveryDetailStep from './form/DeliveryDetailStep';
import ShipmentStep from './form/ShipmentStep';
import ThanksPageStep from './form/ThanksPageStep';
import useMultistep from './utils/useMultistep';

const pageStep = ["Delivery", "Payment", "Finish"]
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

  const onSubmit = (data) => {
    if (!isLastStep) return next();
  }

  const handleChange = () => {
    // localStorage.setItem('itemSaved', JSON.stringify(data));
    console.log(data)
  }

  useEffect(() => {
    localStorage.setItem('itemSaved', JSON.stringify(data));
    if (isLastStep) return localStorage.removeItem('itemSaved');
  }, [data, currentStepIndex])

  return (
    <FormProvider {...methods} >
      <form onChange={handleChange} onSubmit={methods.handleSubmit(onSubmit)}>
        <div >
          <h1>
            {pageStep[currentStepIndex]}
          </h1>
        </div>
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

          {!isLastStep && <button type="submit">{currentStepIndex !== steps.length - 2 ? 'Continue to Payment' : data.Payment ? `Pay with ${data.Payment}` : 'Pay'}</button>}
        </div>
        <Summary />
      </form>
    </FormProvider>
  );
}

export default App;
