import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

import { IPhoto } from '../models'

const useFetchData = (url: string) => {
    const [data, setData] = useState<IPhoto[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        if (url) {
            try {
                setError('')
                setLoading(true)
                const response = await axios.get<IPhoto[]>(url)
                setLoading(false)
                setData([...data, ...response.data])
            } catch (e: unknown) {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            }
        }
    }
    useEffect(() => {
        fetchData()
    }, [url])

    return { data, error, loading }
}

export default useFetchData