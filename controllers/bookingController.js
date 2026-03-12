const seats = require("../data/seats")
const processPayment = require("../services/paymentService")
const { acquireLock, releaseLock } = require("../services/lockService")
const generateBookingId = require("../utils/bookingId")

async function checkSeat(req, res)
{
    const seatId = req.params.seatId

    if (!(seatId in seats))
    {
        return res.status(404).json({ error: "seat not found" })
    }

    res.json({
        seat_id: seatId,
        available: seats[seatId]
    })
}

async function bookSeat(req, res)
{
    const { user, seat_id, payment } = req.body

    if (!(seat_id in seats))
    {
        return res.status(404).json({ error: "invalid seat" })
    }

    await acquireLock(seat_id)

    try
    {
        if (!seats[seat_id])
        {
            return res.status(409).json({
                error: "seat already booked"
            })
        }

        const paymentResult = processPayment(payment)

        if (!paymentResult.success)
        {
            return res.status(400).json({
                error: "payment failed"
            })
        }

        seats[seat_id] = false

        const bookingId = generateBookingId()

        res.json({
            booking_id: bookingId,
            seat_id: seat_id,
            status: "CONFIRMED"
        })
    }
    finally
    {
        releaseLock(seat_id)
    }
}

module.exports = { checkSeat, bookSeat }
