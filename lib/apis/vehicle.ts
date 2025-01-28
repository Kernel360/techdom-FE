import { API_URL } from '@/constants/api'
import { apiClient } from '@/lib/apis/client'
import { normalizeVehicleResponse } from '@/lib/utils/normalize'
import { removeSpaces } from '@/lib/utils/string'
import mockRoutesData from '@/mock/vehicle_route_data.json'

export const vehicleAPI = {
    // 개별차량 검색 조회
    getVehicleInfo: async (vehicleNumber: string) => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicles/search`, {
            params: {
                'vehicle-number': removeSpaces(vehicleNumber),
            },
        })

        if (!response.data.isSuccess) {
            if (response.data.errorCode === 1003) {
                return { isValid: false, value: '등록되지 않은 차량입니다.' }
            }
        }

        const normalizeResult = normalizeVehicleResponse(response.data.result)
        return { isValid: true, value: normalizeResult }
    },
    // 개별차량 상세정보 조회
    getVehicleDetailInfo: async (vehicleId: string) => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicles/${vehicleId}`)

        return response.data.result
    },
    // 시동 여부에 따른 차량 현황 조회
    getVehicleStatus: async () => {
        const response = await apiClient.get(`${API_URL}/api/v1/vehicles/status`)

        return response.data.result
    },
    fetchVehicleRoutesData: async () => {
        // fetchVehicleRoutesData: async (vehicleId: string, startDate: DateTime, endDate: DateTime, interval = 60) => {
        // const formattedStartDate = formatToISODate(startDate)
        // const formattedEndDate = formatToISODate(endDate)
        // const response = await apiClient.get(
        //     `${API_URL}/api/vi/vehicles/${vehicleId}/routes?startTime=${formattedStartDate}&endTime=${formattedEndDate}&interval=${interval}`,
        // )
        // console.log(formattedStartDate, formattedEndDate, vehicleId, interval)

        // return response.result

        return mockRoutesData
    },
}
