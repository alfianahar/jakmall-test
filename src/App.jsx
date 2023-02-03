import { useEffect, useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Summary from './components/Summary';
import DeliveryDetails from './form/DeliveryDetails';
import Shipment from './form/Shipment';
import ThanksPage from './form/ThanksPage';
import useMultistep from './utils/useMultistep';

const pageStep = ["Delivery", "Payment", "Finish"]
const backPageStep = ["Cart", "Delivery"]

function App() {
  const [data, setData] = useState({ goods: 500000, dropshipFee: 0, 'Send as dropshipper': false, Shipment: { label: '', estimation: '', price: 0 } });
  const methods = useForm({
    defaultValues: async () => {
      const itemSaved = JSON.parse(localStorage.getItem('itemSaved'))
      console.log(itemSaved)
      if (itemSaved) return itemSaved
      return { goods: 500000, dropshipFee: 0, 'Send as dropshipper': false, Shipment: { label: '', estimation: '', price: 0 } }
    }
  });
  const value = methods.getValues()
  console.log(value)

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistep([
      <DeliveryDetails {...data} setData={setData} />,
      <Shipment {...data} />,
      <ThanksPage {...data} />,
    ]);

  const onSubmit = (data) => {
    if (!isLastStep) return next();
    methods.setValue('Page State', pageStep[currentStepIndex]);
  }

  const handleChange = () => {
    const value = methods.getValues()
    setData((prev) => {
      return { ...prev, ...value };
    })
    localStorage.setItem('itemSaved', JSON.stringify(value));
    console.log(data);
  }

  // useEffect(() => {
  //   const valueSaved = JSON.parse(localStorage.getItem('itemSaved'));
  //   setData(valueSaved)
  //   console.log('getitem', data);
  // }, [])

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
        <Summary {...data} />
      </form>
    </FormProvider>
  );
}

export default App;
