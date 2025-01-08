'use client'

import { RoundButton } from '@/components/common/Button/RoundButton'
import SearchInput from '@/components/common/Input/SearchInput'
import ListItem from '@/components/domain/vehicle/List/ListItem'
import { VehicleLogProps } from '@/components/domain/vehicle/List/ListItem/types'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import { RightIcon } from '@/public/icons'

import * as styles from './styles.css'

const LogPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockLogData: VehicleLogProps = {
        vehicleNumber: '123가 4567',
        vehicleModel: '미니쿠퍼',
        status: '운행중',
        icon: <RightIcon />,
    }
    return (
        <div>
            <div className={styles.componentsWrapper}>
                <div className={styles.buttonWrapper}>
                    <RoundButton color='primary' onClick={() => {}} size='small'>
                        등록
                    </RoundButton>
                </div>
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
            </div>
            <div className={styles.listWrapper}>
                <ListHeader></ListHeader>
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
                <ListItem data={mockLogData} variant={'log'} />
            </div>

            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default LogPage
