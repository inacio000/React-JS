import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {
            id: 1,
            name: "Inacio"
        },
        {
            id: 2,
            name: "Martinho"
        },
        {
            id: 3,
            name: "Raimundo"
        },
        {
            id: 4,
            name: "IMR"
        }
    ]

    return response.json(users)
}