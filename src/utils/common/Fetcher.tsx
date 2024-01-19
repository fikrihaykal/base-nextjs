import { apiEndpointMap } from '@/config/ApiEndpoint'
import { RencanaKerja } from '@/types/renker'
import axios from 'axios'

const fetcherGetBackend = async (key: string) =>
    await axios
        .get(apiEndpointMap.get(key) ?? '', {
            withCredentials: true,
            baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        })
        .then((result): any[] => result.data.data ?? [])

const fetcherGetDetailBackend = async (data: string[]) => {
    const [key, id] = data

    if (id) {
        return await axios
            .get(apiEndpointMap.get(key) + id, { withCredentials: true })
            .then((result) => result.data.data ?? [])
    }
}

const fetcherDateNow = () => new Date().valueOf()

export { fetcherGetBackend, fetcherGetDetailBackend, fetcherDateNow }
