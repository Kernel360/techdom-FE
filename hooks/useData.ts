import { useEffect, useState } from 'react'

import { DATA_PATHS } from '@/constants/data'
import { apiClient } from '@/lib/apis/client'

type DataPathType = keyof typeof DATA_PATHS

interface UseDataProps {
    url: string
    params?: Record<string, string | number>
    dataPath: DataPathType
}

export const useData = ({ url, params, dataPath }: UseDataProps) => {
    const [data, setData] = useState<unknown>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const getData = async () => {
        try {
            setIsLoading(true)
            const response = await apiClient.get(url, { params })
            setData(response.data[dataPath])
        } catch (error) {
            setError('데이터 불러오기 실패')
            console.error('Error', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [url, JSON.stringify(params), dataPath])

    return { data, isLoading, error }
}
