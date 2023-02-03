import React from 'react'

const Summary = ({ goods, Shipment, dropshipFee }) => {
    const currencyFormatter = new Intl.NumberFormat({
        style: "currency",
    });
    const shipmentPrice = Shipment?.price ? Shipment.price : 0
    const total = goods + dropshipFee + shipmentPrice
    return (

        <>
            <h4>Summary</h4>
            <p>10 items purchased</p>

            {Shipment?.estimation &&
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


        </>
    )
}

export default Summary