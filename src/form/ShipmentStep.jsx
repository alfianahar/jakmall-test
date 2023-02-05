import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RadioPayment, RadioShipment } from "../components/Input";
import { MainTittle } from "../components/MainTittle";
import RadioContainer from "../components/RadioContainer";

const shipmentStep = () => {
    const { register, setValue, getValues } = useFormContext();
    const shipment = getValues('shipment')
    const payment = getValues('payment')

    return (
        <div title="shipment">
            <MainTittle>shipment</MainTittle>

            <RadioContainer>
                <RadioShipment target="shipment" checked={shipment.label === 'GO-SEND'} type="radio" name="shipment.label" label='GO-SEND' estimation='today' price={15000} required={true} />
                <RadioShipment target="shipment" checked={shipment.label === 'JNE'} type="2 day" name="shipment.label" label='JNE' estimation='today' price={9000} required={true} />
                <RadioShipment target="shipment" checked={shipment.label === 'Personal Courier'} type="radio" name="shipment.label" label='Personal Courier' estimation='today' price={29000} required={true} />
            </RadioContainer>



            <MainTittle>Payment</MainTittle>
            <RadioContainer>
                <RadioPayment type="radio" label='e-Wallet' name="payment" checked={payment === 'e-Wallet'} required={true} />
                <RadioPayment type="radio" label='Bank Transfer' name="payment" checked={payment === 'Bank Transfer'} required={true} />
                <RadioPayment type="radio" label='Virtual Account' name="payment" checked={payment === 'Virtual Account'} required={true} />


            </RadioContainer>


        </div>
    );
}

export default shipmentStep