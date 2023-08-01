import { dataTabelBerkas } from "@/data/table";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const page = Number(req.query.page) ?? 1
            const nextPage = page < 12 ? "/api/berkas/" + (page + 1) : null
            const response = {
                code: 200,
                message: "GET_BERKAS",
                links: {
                    next: nextPage
                },
                meta: {
                    page: page,
                    total: 12,
                },
                data: [
                    dataTabelBerkas[0],
                    dataTabelBerkas[1]
                ]
            }
            return res.status(200).json(response)
        } catch (err) {
            return res.status(400).json({ message: 'GET_BERKAS', reason: err })
        }
    } else {
        return res.status(405).json({ message: 'Method Not allowed!' });
    }
}