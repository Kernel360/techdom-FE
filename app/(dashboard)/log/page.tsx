'use client'

import ListItem from '@/components/domain/vehicle/List/ListItem'
import { VehicleLogProps } from '@/components/domain/vehicle/List/ListItem/types'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import { RightIcon } from '@/public/icons'

const LogPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockLogData: VehicleLogProps = {
        id: 1,
        vehicleNumber: '123가 4567',
        vehicleModel: '미니쿠퍼',
        operationDate: '2024-01-07',
        status: '운행중',
        icon: <RightIcon />,
    }
    return (
        <div>
            <ListHeader></ListHeader>
            <ListItem data={mockLogData} variant={'log'} />
        </div>
    )
}

export default LogPage
