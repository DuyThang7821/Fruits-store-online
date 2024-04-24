import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { setCartId } from "../../store/user/userSlice"; 

const style = { "layout": "vertical" };

const ButtonWrapper = ({ currency, showSpinner, amount, handleCheckout }) => {
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options, currency: currency,
      }
    })
  }, [currency, showSpinner])

  return (
    <>
      { (showSpinner && isPending) && <div className="spinner" /> }
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style, currency, amount]}
        fundingSource={undefined}
        createOrder={(data, actions) => actions.order.create({
          purchase_units: [
            { amount: { currency_code: currency, value: amount } }
          ]
        }).then(orderId => orderId)}
        onApprove={(data, actions) => actions.order.capture().then(async (response) => {
          if (response.status === 'COMPLETED') {
            handleCheckout(); 
          }
        })}
      />
    </>
  );
}

export default function Paypal({ amount, handleCheckout }) { 
  const cartId = useSelector((state) => state.user.cartId);
  const dispatch = useDispatch();
  useEffect(() => {
    let localCartId = localStorage.getItem('cartId');
    if (!cartId && localCartId) {
      dispatch(setCartId({ cartId: localCartId }));
    }
  }, [cartId, dispatch]);
  return (
    <div style={{ width: "450px", minHeight: "80px", margin: 'auto', padding: '10px' }}>
      <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
        <ButtonWrapper currency={'USD'} amount={amount} showSpinner={false} cartId={cartId} handleCheckout={handleCheckout} />
      </PayPalScriptProvider>
    </div>
  );
}
