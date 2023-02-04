import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import MainTittle from "../components/MainTittle";

const shipmentStep = () => {
    const { register, setValue, getValues } = useFormContext();
    const shipment = getValues('shipment')

    return (
        <div title="shipment">
            <MainTittle>shipment</MainTittle>
            <input {...register("shipment.label", { required: true })} type="radio" onChange={() => setValue('shipment', { label: 'GO-SEND', estimation: 'today', price: 15000 })} value='GO-SEND' /> GO-SEND
            <input {...register("shipment.label", { required: true })} type="radio" onChange={() => setValue('shipment', { label: 'JNE', estimation: '2 day', price: 9000 })} value='JNE' /> JNE
            <input {...register("shipment.label", { required: true })} type="radio" onChange={() => setValue('shipment', { label: 'Personal Courier', estimation: '1 day', price: 29000 })} value='Personal Courier' /> Personal Courier

            <h1>Payment</h1>
            <input {...register("payment", { required: true })} type="radio" value="e-Wallet" /> e-Wallet
            <input {...register("payment", { required: true })} type="radio" value="Bank Transfer" /> Bank Transfer
            <input {...register("payment", { required: true })} type="radio" value="Virtual Account " /> Virtual Account

        </div>
    );
}

export default shipmentStep