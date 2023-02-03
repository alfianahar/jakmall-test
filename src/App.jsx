import { useEffect, useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import DeliveryDetails from './form/DeliveryDetails';
import Shipment from './form/Shipment';
import ThanksPage from './form/ThanksPage';
import useMultistep from './utils/useMultistep';


// const INITIAL_DATA = {
//   email: "",
//   phoneNumber: "",
//   deliveryAdress: "",
//   SendAsDropshipper: false,
//   dropshipperName: "",
//   dropshipperPhoneNumber: "",
//   shipment: {label: "", estimation: "", price: 0},
//   payment: ""
// };

function App() {
  const methods = useForm();
  const [data, setData] = useState([]);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistep([
      <DeliveryDetails {...data} />,
      <Shipment {...data} />,
      <ThanksPage {...data} />,
      // <AddressForm {...data} updateFields={updateFields} />,
      // <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (data) => {
    // data.preventDefault();
    console.log(data);
    if (!isLastStep) return next();
    alert('Your Account Succesfully Created');
  }

  const handleChange = () => {
    const value = methods.getValues()
    console.log(data.Shipment);
    setData(value)
    if (data.Shipment.label === 'GO-SEND') {
      methods.setValue('Shipment.estimation', 'today');
      methods.setValue('Shipment.price', 15000)
    }
    if (data.Shipment.label === 'JNE') {
      methods.setValue('Shipment.estimation', '2 day');
      methods.setValue('Shipment.price', 9000)
    }
    if (data.Shipment.label === 'Personal Courier') {
      methods.setValue('Shipment.estimation', '1 day');
      methods.setValue('Shipment.price', 29000)
    }
  }

  return (
    <FormProvider {...methods} >
      <form onChange={handleChange} onSubmit={methods.handleSubmit(onSubmit)}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
