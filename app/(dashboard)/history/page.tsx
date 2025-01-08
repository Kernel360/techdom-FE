'use client'

import SearchInput from '@/components/common/Input/SearchInput'
import ListItem from '@/components/domain/vehicle/List/ListItem'
import { VehicleHistoryProps } from '@/components/domain/vehicle/List/ListItem/types'
import { RightIcon } from '@/public/icons'

import ListHeader from './components/ListHeader'
import * as styles from './styles.css'

const HistoryPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockHistoryData: VehicleHistoryProps = {
        vehicleNumber: '123가 4567',
        icon: <RightIcon />,
        department: '해외부서',
        name: '김알린',
        drivingDays: 15,
        averageDrivingDistance: 150,
        averageDrivingTime: 480,
        totalDrivingDistance: 2250,
        drivingRate: '85',
    }
    return (
        <div>
            <div className={styles.componentsWrapper}>
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
            </div>

            <div className={styles.listWrapper}>
                <ListHeader></ListHeader>
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
                <ListItem data={mockHistoryData} variant={'history'} />
            </div>
            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default HistoryPage
