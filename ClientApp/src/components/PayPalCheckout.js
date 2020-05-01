import React, { useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard"

export default function PayPalCheckout(){
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    let paypalRef = useRef()

    const product = {
        price: 777.77,
        name: 'comfy chair',
        description: 'fancy chair, like new',
      };

    useEffect(() =>{
        window.paypal.Buttons({
            creareOrder: (data, actions) => {
                return actions.order.create({
                    purchace_units: [
                        {
                            description: product.description,
                            amount: {
                                currency_code: "USD",
                                value: product.price,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaidFor(true)
                console.log(order)
            },
            onError: err => {
                setError(err)
                console.log(err)
            }
        })
        .render(paypalRef)
    })

    return(
        <div>
            {paidFor ? (
                <div>
                    <h1>Your order is payed, ty!</h1>
                </div>
            ) : (
                <div>
                    <div ref={v => (paypalRef = v)} />
                </div>
                )
            }
        </div>
    )
}