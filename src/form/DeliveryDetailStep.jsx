import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import FormStep from "../components/FormStep";
import Input from "../components/Input";
import MainTittle from "../components/MainTittle";

const DeliveryDetailStep = () => {
    const { register, getValues, setValue } = useFormContext();
    useWatch({ name: 'Send as dropshipper' });
    const dropshipperState = getValues('Send as dropshipper')

    useEffect(() => {
        setValue('dropshipFee', 0)
        if (dropshipperState) setValue('dropshipFee', 5900)
    }, [dropshipperState])
    return (
        <FormStep title="Delivery Details">
            <MainTittle>Delivery Details</MainTittle>

            <Input type='text' label="Email" name="Email" required={true} pattern='/^\S+@\S+$/i' />
            <Input type="tel" label="Phone Number" name="phoneNumber"
                required={true} minLength='6' maxLength='20' pattern='/^[0-9\-+(),]+$/i'
            />
            <Input type="textarea" label="Delivery Address" name="deliveryAddress" required={true} />
            <textarea placeholder="Delivery Address" {...register("Delivery Address", { required: true })} />

            <input type="checkbox" placeholder="Send as dropshipper" {...register("Send as dropshipper", {})} />

            <Input disabled={!dropshipperState} type='text' label="Dropshipper name" name="dropshipperName" required={dropshipperState} maxLength='100' />
            <Input disabled={!dropshipperState} type='text' label="Dropshipper phone" name="dropshipperPhone" required={dropshipperState} minLength='6' maxLength='20' pattern='/^[0-9\-+(),]+$/i' />
            {/* <input type="tel" placeholder="Dropshipper name" disabled={!dropshipperState} {...register("Dropshipper name", { required: dropshipperState, maxLength: 100 })} />
            <input type="tel" placeholder="Dropshipper phone number" disabled={!dropshipperState}{...register("Dropshipper phone number", { required: dropshipperState, minLength: 6, maxLength: 20, pattern: /^[0-9\-+(),]+$/i })} /> */}

        </FormStep>
    );
}

export default DeliveryDetailStep