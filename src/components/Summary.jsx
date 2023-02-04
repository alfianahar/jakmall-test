import React, { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form';
import styled from "styled-components";


const SummaryContainer = styled.div`

`;

const Summary = () => {
    const { getValues, setValue } = useFormContext();

    const Shipment = getValues('Shipment')
    const goods = getValues('goods')
    const dropshipFee = getValues('dropshipFee')
    useWatch({ name: 'dropshipFee', name: 'Shipment' })

    const currencyFormatter = new Intl.NumberFormat({
        style: "currency",
    });

    const shipmentPrice = Shipment.price
    const total = goods + dropshipFee + shipmentPrice

    return (
        <SummaryContainer>
            <h4>Summary</h4>
            <p>10 items purchased</p>

            {Shipment.estimation &&
                <>
                    <h5>Delivery estimation</h5>
                    <h4>{Shipment.estimation} by {Shipment.label}</h4>
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
                    <p>{Shipment.label} shipment</p> <span>{currencyFormatter.format(shipmentPrice)}</span>
                </div>
            }
            <h4>Total</h4> <span>{total}</span>


        </SummaryContainer>
    )
}

export default Summary