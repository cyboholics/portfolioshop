import React from 'react'

const DonateButton = ({ buttonId }) => {
    React.useEffect(() => {
        const donateForm = document.getElementById(buttonId)
        const formScript = document.createElement("script");
        formScript.setAttribute('src', "https://checkout.razorpay.com/v1/payment-button.js")
        formScript.setAttribute('data-payment_button_id', 'pl_JKPvIiQu72kFIv')
        donateForm.appendChild(formScript)
    }, [buttonId])
    return (
        <form id={buttonId}></form>
    )
}

export default DonateButton