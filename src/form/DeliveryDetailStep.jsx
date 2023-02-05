import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import FormStep from "../components/FormStep";
import { Checkbox, Input, Textarea } from "../components/Input";
import { MainTittle } from "../components/MainTittle";

const DeliveryDetailStep = () => {
    const { register, getValues, setValue } = useFormContext();
    useWatch({ name: 'sendAsDropshipper' });
    const dropshipperState = getValues('sendAsDropshipper')

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
            <Textarea type="textarea" label="Delivery Address" name="deliveryAddress" required={true} />

            {/* <input type="checkbox" placeholder="Send as dropshipper" {...register("sendAsDropshipper")} /> */}
            <Checkbox type="checkbox" label='Send as dropshipper' name="sendAsDropshipper" checked={dropshipperState} />

            <Input disabled={!dropshipperState} type='text' label="Dropshipper name" name="dropshipperName" required={dropshipperState} maxLength='100' />
            <Input disabled={!dropshipperState} type='text' label="Dropshipper phone" name="dropshipperPhone" required={dropshipperState} minLength='6' maxLength='20' pattern='/^[0-9\-+(),]+$/i' />

        </FormStep>
    );
}

export default DeliveryDetailStep