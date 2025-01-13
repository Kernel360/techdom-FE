import { LatLng } from '@/types/location'

export interface singleVehicleModel {
    vehicleId: string
    vehicleNumber: string
    status: string
    location: LatLng
}

export interface vehicleDetailsModel {
    department: string
    vehicleId: string
    vehicleNumber: string
    driverName: string
    status: {
        type: VehicleStatusType
        speed: number
        lastEngineOn: string
        lastEngineOff: string
    }
    dailyStatus: {
        distance: number
        drivingTime: number
    }
    location: {
        lat: number
        lng: number
        lastUpdated: string
    }
}

export type VehicleStatusType = 'ON' | 'OFF'
