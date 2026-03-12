const seats = {}

function initializeSeats()
{
    const rows = ["A", "B"]

    for (let r of rows)
    {
        for (let i = 1; i <= 20; i++)
        {
            const id = r + i
            seats[id] = true
        }
    }
}

initializeSeats()

module.exports = seats
