export interface VehicleDataProps {
    id?: number
    vehicleNumber: string
    icon: React.ReactNode
    className?: string
}

export interface VehicleLogProps extends VehicleDataProps {
    vehicleModel?: string
    operationDate?: string
    status?: React.ReactNode
}

export interface VehicleHistoryProps extends VehicleDataProps {
    department?: string
    name?: string
    drivingDays?: number
    averageDrivingDistance?: number
    averageDrivingTime?: number
    totalDrivingDistance?: number
    drivingRate?: React.ReactNode
}

export type ListType = {
    variant: 'log' | 'history'
    data: VehicleLogProps | VehicleHistoryProps
}
