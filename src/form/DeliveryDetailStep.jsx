import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const DeliveryDetailStep = () => {
    const { register, getValues, setValue } = useFormContext();
    useWatch({ name: 'Send as dropshipper' });
    const dropshipperState = getValues('Send as dropshipper')

    useEffect(() => {
        setValue('dropshipFee', 0)
        if (dropshipperState) setValue('dropshipFee', 5900)
    }, [dropshipperState])
    return (
        <div title="Delivery Details">
            <h1>Delivery Details</h1>
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Phone number" {...register("Phone number", { required: true, minLength: 6, maxLength: 20, pattern: /^[0-9\-+(),]+$/i })} />
            <textarea placeholder="Delivery Address" {...register("Delivery Address", { required: true })} />

            <input type="checkbox" placeholder="Send as dropshipper" {...register("Send as dropshipper", {})} />

            <input type="text" placeholder="Dropshipper name" disabled={!dropshipperState} {...register("Dropshipper name", { required: dropshipperState, maxLength: 100 })} />
            <input type="tel" placeholder="Dropshipper phone number" disabled={!dropshipperState}{...register("Dropshipper phone number", { required: dropshipperState, minLength: 6, maxLength: 20, pattern: /^[0-9\-+(),]+$/i })} />

        </div>
    );
}

export default DeliveryDetailStep