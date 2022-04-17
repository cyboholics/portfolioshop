import React from 'react'

const DonateButton = () => {
    React.useEffect(()=>{
        const donateForm = document.getElementsByClassName('donate-form')[0]
        const formScript = document.createElement("script");
        formScript.setAttribute('src',"https://checkout.razorpay.com/v1/payment-button.js")
        formScript.setAttribute('data-payment_button_id','pl_JKPvIiQu72kFIv')
        donateForm.appendChild(formScript)
    },[])
    return(
        <form className='donate-form'></form>
    )
}

export default DonateButton