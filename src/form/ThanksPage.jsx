import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const ThanksPage = ({ Shipment }) => {
    const [orderId, setOrderId] = useState('')

    const randomString = () => {
        const length = 5
        const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
        let result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return setOrderId(result);
    }
    useEffect(() => {
        randomString()
    }, [])
    return (
        <div title="Thank You">
            <h1>Thank You</h1>
            <h5>Order ID: {orderId}</h5>
            <p>Your order will be delivered {Shipment.estimation} with {Shipment.label}</p>


        </div>
    );
}

export default ThanksPage