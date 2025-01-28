import React, { useEffect, useState } from 'react'

import Progress from '@/app/(main)/location/components/VehicleStatusItem'
import { vehicleAPI } from '@/lib/apis'
import { vars } from '@/styles/theme.css'

import * as styles from './styles.css'

interface VehicleStatusModel {
    allVehicles: number
    engineOnVehicles: number
    engineOffVehicles: number
}

const VehicleStatusPanel = () => {
    const [vehicleStatus, setVehicleStatus] = useState<VehicleStatusModel>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getVehicleStatus = async () => {
            try {
                setIsLoading(true)
                const vehicleStatus = await vehicleAPI.getVehicleStatus()
                setVehicleStatus(vehicleStatus)
            } catch (error) {
                console.error('Failed to fetch vehicle status:', error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleStatus()
    }, [])

    if (isLoading || !vehicleStatus) return

    return (
        <div className={styles.container}>
            <Progress total={vehicleStatus.allVehicles} current={vehicleStatus.allVehicles} color={vars.colors.primary}>
                전체차량
            </Progress>

            <Progress
                total={vehicleStatus.allVehicles}
                current={vehicleStatus.engineOnVehicles}
                color={vars.colors.green[500]}
            >
                운행중
            </Progress>

            <Progress
                total={vehicleStatus.allVehicles}
                current={vehicleStatus.engineOffVehicles}
                color={vars.colors.blue}
            >
                미운행
            </Progress>
        </div>
    )
}

export default VehicleStatusPanel
