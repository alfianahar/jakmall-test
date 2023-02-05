import React, { Children, useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form';
import styled from "styled-components";
import { BasicTitle } from './MainTittle';


const SummaryContainer = styled.div`
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TopSummary = styled.div`
    height: 100%;
    margin-bottom: 4rem;

    @media only screen and (min-width: 800px) {
        margin-bottom: 0rem;
    }
`;
const BottomSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const HorizontalLine = styled.div`
    border-bottom: 1px solid #D8D8D8;
    mix-blend-mode: normal;
    margin: 1.25rem 0rem;
    width: 30%;

    @media only screen and (min-width: 800px) {
        width: 40%;
    }
`
const ShipmentPaymentTitle = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.05rem;
    margin-bottom: 0.25rem;
    color: #000000;
`
const ShipmentPaymentText = styled.p`
    font-size: 1rem;
    line-height: 1.25rem;
    color: #1BD97B;   
`

const PriceDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.875rem;
`

const TotalPriceDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.75rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #FF8A00;
`

const ShipmentPaymentSummary = ({ title, children }) => {
    return (
        <>
            <HorizontalLine />
            <ShipmentPaymentTitle>{title}</ShipmentPaymentTitle>
            <ShipmentPaymentText>{children}</ShipmentPaymentText>
        </>
    )
}

const PriceLabel = ({ label, price }) => {
    return (
        <PriceDetail>
            <p>{label}</p>
            <p style={{ fontWeight: '700' }}>{price}</p>
        </PriceDetail>
    )
}

const TotalLabel = ({ label, price }) => {
    return (
        <TotalPriceDetail>
            <p>{label}</p>
            <p style={{ fontWeight: '700' }}>{price}</p>
        </TotalPriceDetail>
    )
}

const Summary = () => {
    const { getValues } = useFormContext();

    const shipment = getValues('shipment')
    const payment = getValues('payment')
    const goods = getValues('goods')
    const dropshipFee = getValues('dropshipFee')
    useWatch({ name: 'dropshipFee', name: 'shipment', name: 'payment' })

    const currencyFormatter = new Intl.NumberFormat({
        style: "currency",
    });

    const shipmentPrice = shipment.price
    const total = goods + dropshipFee + shipmentPrice

    return (
        <SummaryContainer>
            <TopSummary>
                <BasicTitle>
                    Summary
                </BasicTitle>
                <p>10 items purchased</p>

                {shipment.estimation &&
                    <>
                        <ShipmentPaymentSummary title='Delivery estimation'>
                            {shipment.estimation} by {shipment.label}
                        </ShipmentPaymentSummary>
                        <ShipmentPaymentSummary title='Payment method'>
                            {payment}
                        </ShipmentPaymentSummary>
                    </>
                }
            </TopSummary>
            <BottomSummary>
                <PriceLabel label='Cost of Goods' price={currencyFormatter.format(goods)} />



                {dropshipFee !== 0 &&
                    <PriceLabel label='Dropship Fee' price={currencyFormatter.format(dropshipFee)} />
                }
                {shipmentPrice !== 0 &&
                    <PriceLabel label='shipment' price={currencyFormatter.format(shipmentPrice)} />
                }
                <TotalLabel label='Total' price={currencyFormatter.format(total)} />
                {/* <h4>Total</h4> <span>{total}</span> */}
            </BottomSummary>


        </SummaryContainer>
    )
}

export default Summary