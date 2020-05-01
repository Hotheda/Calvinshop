import React, { useEffect, useRef} from "react"

export default function PayPalCheckout(props){
    //const [error, setError] = useState(null)
    let paypalRef = useRef()

    /*
    const itemsPaypal = props.orderItems.map((item)=>{
        return ({
            description: (item.description),
            amount: {
                currency_code: "USD",
                value: item.price
            }
        })
    })*/


    useEffect(() =>{
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        
                            description: "Calvin webshop",
                            amount: {
                                currency_code: "USD",
                                details: {
                                    subtotal: 1.09,
                                    shipping: 0.02,
                                    tax: 0.33
                                  },
                                value: props.totalPrice,
                            },
                        }],
                    
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                props.setOrderConfirmed(true)
            }/*
            onError: err => {
                setError(err)
                //console.log(error)
            }*/
        })
        .render(paypalRef)
    })

    return(
        <div>
            {props.orderConfirmed ? (
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