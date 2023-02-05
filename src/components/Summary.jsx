import React, { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form';
import styled from "styled-components";
import { BasicTitle } from './MainTittle';


const SummaryContainer = styled.div`

`;

const Summary = () => {
    const { getValues, setValue } = useFormContext();

    const shipment = getValues('shipment')
    const goods = getValues('goods')
    const dropshipFee = getValues('dropshipFee')
    useWatch({ name: 'dropshipFee', name: 'shipment' })

    const currencyFormatter = new Intl.NumberFormat({
        style: "currency",
    });

    const shipmentPrice = shipment.price
    const total = goods + dropshipFee + shipmentPrice

    return (
        <SummaryContainer>
            <BasicTitle>
                Summary
            </BasicTitle>
            <p>10 items purchased</p>

            {shipment.estimation &&
                <>
                    <h5>Delivery estimation</h5>
                    <h4>{shipment.estimation} by {shipment.label}</h4>
                </>
            }
            <div>
                <p>Cost of Goods</p> <span>{currencyFormatter.format(goods)}</span>
            </div>
            {dropshipFee !== 0 &&
                <div>
                    <p>Dropship Fee</p> <span>{currencyFormatter.format(dropshipFee)}</span>
                </div>
            }
            {shipmentPrice !== 0 &&
                <div>
                    <p>{shipment.label} shipment</p> <span>{currencyFormatter.format(shipmentPrice)}</span>
                </div>
            }
            <h4>Total</h4> <span>{total}</span>


        </SummaryContainer>
    )
}

export default Summary