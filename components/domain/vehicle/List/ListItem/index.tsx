'use client'
import React from 'react'

import Badge from '@/components/common/Badge'

import * as styles from './styles.css'
import { ListType, VehicleHistoryProps, VehicleLogProps } from './types'

const ListItem = ({ variant, data }: ListType) => {
    if (variant === 'log') {
        const logData = data as VehicleLogProps
        return (
            <div className={logData.className}>
                <div className={styles.itemWrapper}>
                    <span className={styles.itemContent}>{logData.vehicleNumber}</span>
                    <span className={styles.itemContent}>{logData.vehicleModel}</span>
                    {/* TODO 데이터 상태에 따라 변경 및 onClick 넣기  */}
                    <span className={styles.itemContent}>
                        <Badge shape={'rectangle'} variant={'운행중'}></Badge>
                    </span>
                    <div className={styles.icon}>{logData.icon}</div>
                </div>
            </div>
        )
    }

    const historyData = data as VehicleHistoryProps
    return (
        <div className={historyData.className}>
            <div className={styles.itemWrapper}>
                {historyData.id && <span>{historyData.id}</span>}
                <span className={styles.itemContent}>{historyData.vehicleNumber}</span>
                <span className={styles.itemContent}>{historyData.department}</span>
                <span className={styles.itemContent}>{historyData.name}</span>
                <span className={styles.itemContent}>{historyData.drivingDays}</span>
                <span className={styles.itemContent}>{historyData.averageDrivingDistance}</span>
                <span className={styles.itemContent}>{historyData.averageDrivingTime}</span>
                <span className={styles.itemContent}>{historyData.totalDrivingDistance}</span>
                <span className={styles.itemContent}>{historyData.drivingRate}</span>
                <div className={styles.icon}>{historyData.icon}</div>
            </div>
        </div>
    )
}

export default ListItem
