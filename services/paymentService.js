function processPayment(payment)
{
    if (!payment || !payment.payment_mode)
    {
        return { success: false }
    }

    const mode = payment.payment_mode

    if (mode === "UPI")
    {
        if (!payment.upi_id)
        {
            return { success: false }
        }
    }

    if (mode === "CREDIT_CARD")
    {
        if (!payment.card_number || !payment.cvv)
        {
            return { success: false }
        }
    }

    if (mode === "WALLET")
    {
        if (!payment.wallet_id)
        {
            return { success: false }
        }
    }

    const fail = Math.random() < 0.2

    if (fail)
    {
        return { success: false }
    }

    return { success: true }
}

module.exports = processPayment
