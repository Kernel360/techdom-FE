'use client'

import { useEffect, useState } from 'react'
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk'

import { MARKER_IMAGE } from '@/constants/map'
import { VehicleInfoModel } from '@/types/vehicle'

import * as styles from './styles.css'

interface VehicleMarkerProps {
    vehicleInfo: VehicleInfoModel
    onVehicleClick: () => void
}

const VehicleMarker = ({ vehicleInfo, onVehicleClick }: VehicleMarkerProps) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsDescriptionVisible(false)
        }, 3000)
    }, [])

    const vehicleNumber = vehicleInfo.vehicleNumber.slice(0, 3) + ' ' + vehicleInfo.vehicleNumber.slice(3)

    return (
        <CustomOverlayMap position={vehicleInfo?.location}>
            <MapMarker position={vehicleInfo?.location} image={MARKER_IMAGE} />
            <p className={styles.vehicleCard} onClick={onVehicleClick} role='presentation'>
                {vehicleNumber}
            </p>
            {isDescriptionVisible && (
                <p className={styles.description}>
                    차량번호를 클릭하시면
                    <br /> 상세 정보를 확인할 수 있습니다
                </p>
            )}
        </CustomOverlayMap>
    )
}

export default VehicleMarker