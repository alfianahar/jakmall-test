import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const ShipmentStep = () => {
    const { register, setValue, getValues } = useFormContext();
    const Shipment = getValues('Shipment')

    return (
        <div title="Shipment">
            <h1>Shipment</h1>
            <input {...register("Shipment.label", { required: true })} type="radio" onChange={() => setValue('Shipment', { label: 'GO-SEND', estimation: 'today', price: 15000 })} value='GO-SEND' /> GO-SEND
            <input {...register("Shipment.label", { required: true })} type="radio" onChange={() => setValue('Shipment', { label: 'JNE', estimation: '2 day', price: 9000 })} value='JNE' /> JNE
            <input {...register("Shipment.label", { required: true })} type="radio" onChange={() => setValue('Shipment', { label: 'Personal Courier', estimation: '1 day', price: 29000 })} value='Personal Courier' /> Personal Courier

            <h1>Payment</h1>
            <input {...register("Payment", { required: true })} type="radio" value="e-Wallet" /> e-Wallet
            <input {...register("Payment", { required: true })} type="radio" value="Bank Transfer" /> Bank Transfer
            <input {...register("Payment", { required: true })} type="radio" value="Virtual Account " /> Virtual Account

        </div>
    );
}

export default ShipmentStep