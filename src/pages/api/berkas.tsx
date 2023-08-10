import { dataTabelBerkas } from "@/data/table";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const page = Number(req.query.page ?? 1)
            const data = dataTabelBerkas
            const perPage = 4
            const offset = (page - 1) * perPage

            const totalPage = Math.ceil(data.length / perPage)
            const nextPage = page < totalPage ? "/api/berkas?page=" + (page + 1) : null
            const pageData = dataTabelBerkas.slice(offset, offset + perPage)

            const response = {
                code: 200,
                message: "GET_BERKAS",
                links: {
                    next: nextPage
                },
                meta: {
                    page: page,
                    total: 30,
                },
                data: pageData
            }
            return res.status(200).json(response)
        } catch (err) {
            return res.status(400).json({ message: 'GET_BERKAS', reason: err })
        }
    } else {
        return res.status(405).json({ message: 'Method Not allowed!' });
    }
}