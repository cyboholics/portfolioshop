import React from 'react'

const DonateButton = ({ buttonId }) => {
    const [id,] = React.useState(buttonId)
    React.useEffect(() => {
        const donateForm = document.getElementById(id)
        const formScript = document.createElement("script");
        formScript.setAttribute('src', "https://checkout.razorpay.com/v1/payment-button.js")
        formScript.setAttribute('data-payment_button_id', 'pl_JKPvIiQu72kFIv')
        donateForm.appendChild(formScript)
    }, [id])
    return (
        <form id={id}></form>
    )
}

export default DonateButton