const axios = require("axios")

const url = "http://localhost:3000/book"

async function test()
{
    const requests = []

    for (let i = 0; i < 10; i++)
    {
        requests.push(
            axios.post(url, {
                user: "user" + i,
                seat_id: "A7",
                payment: {
                    payment_mode: "UPI",
                    upi_id: "test@upi"
                }
            }).then(r => r.data).catch(e => e.response.data)
        )
    }

    const results = await Promise.all(requests)

    console.log(results)
}

test()
