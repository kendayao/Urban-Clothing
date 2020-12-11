import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

const StripedCheckoutButton=({price})=>{
    const priceFormStripe=price*100;
    const publishableKey='pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67'

    const onToken=token=>{
        console.log(token)
       axios({
           url: 'payment',
           method: 'post',
           data:{
               amount: priceFormStripe,
               token
           }
       }).then(response=>{
           alert('Payment Successful')
       }).catch(error=>{
           console.log('Payment error: ', error);
           alert('There was an issue with your payment')
       })
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name="Urban Clothing"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceFormStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripedCheckoutButton