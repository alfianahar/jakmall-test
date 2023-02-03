import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const Shipment = ({ Shipment }) => {
    const { register, setValue } = useFormContext();

    if (Shipment?.label === 'GO-SEND') {
        setValue('Shipment.estimation', 'today');
        setValue('Shipment.price', 15000)
    }
    if (Shipment?.label === 'JNE') {
        setValue('Shipment.estimation', '2 day');
        setValue('Shipment.price', 9000)
    }
    if (Shipment?.label === 'Personal Courier') {
        setValue('Shipment.estimation', '1 day');
        setValue('Shipment.price', 29000)
    }

    return (
        <div title="Shipment">
            <h1>Shipment</h1>
            <input {...register("Shipment.label", { required: true })} type="radio" value="GO-SEND" /> GO-SEND
            <input {...register("Shipment.label", { required: true })} type="radio" value="JNE" /> JNE
            <input {...register("Shipment.label", { required: true })} type="radio" value="Personal Courier" /> Personal Courier

            <h1>Payment</h1>
            <input {...register("Payment", { required: true })} type="radio" value="e-Wallet" /> e-Wallet
            <input {...register("Payment", { required: true })} type="radio" value="Bank Transfer" /> Bank Transfer
            <input {...register("Payment", { required: true })} type="radio" value="Virtual Account " /> Virtual Account

        </div>
    );
}

export default Shipment