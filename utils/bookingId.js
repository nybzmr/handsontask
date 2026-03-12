let counter = 100

function generateBookingId()
{
    counter++

    return "B" + counter
}

module.exports = generateBookingId
