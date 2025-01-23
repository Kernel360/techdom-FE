import { useEffect, useState } from 'react'

import { apiClient } from '@/lib/apis/client'

import { LogListResponse } from '../types'

export const useLogData = () => {
    const [logData, setLogData] = useState<LogListResponse>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const handleGetLogData = async () => {
        try {
            setIsLoading(true)
            const response = await apiClient.get('/api/v1/driving-log?page=1&size=10')
            setLogData(response.data.result)
        } catch (error: unknown) {
            setError('데이터 불러오기 실패')
            console.error('Error', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleGetLogData()
    }, [])

    return { logData, isLoading, error }
}
