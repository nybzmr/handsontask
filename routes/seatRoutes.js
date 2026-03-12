const express = require("express")

const {
    checkSeat,
    bookSeat
} = require("../controllers/bookingController")

const router = express.Router()

router.get("/seats/:seatId", checkSeat)

router.post("/book", bookSeat)

module.exports = router
