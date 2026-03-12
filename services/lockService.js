const locks = {}

async function acquireLock(seatId)
{
    while (locks[seatId])
    {
        await new Promise(r => setTimeout(r, 50))
    }

    locks[seatId] = true
}

function releaseLock(seatId)
{
    locks[seatId] = false
}

module.exports = { acquireLock, releaseLock }
