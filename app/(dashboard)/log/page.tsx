'use client'

import ListHeader from '@/app/(dashboard)/log/components/ListHeader'
import { RoundButton } from '@/components/common/Button/RoundButton'
import SearchInput from '@/components/common/Input/SearchInput'
import ListItem from '@/components/domain/vehicle/List/ListItem'
import { VehicleLogProps } from '@/components/domain/vehicle/List/ListItem/types'
import { RightIcon } from '@/public/icons'

import * as styles from './styles.css'

const LogPage = () => {
    // TODO 실제 데이터로 변경하기
    const mockLogData: VehicleLogProps[] = [
        {
            vehicleNumber: '123가 4567',
            vehicleModel: '미니쿠퍼',
            status: '운행중',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '456나 7890',
            vehicleModel: '현대',
            status: '미운행',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '789다 1234',
            vehicleModel: '기아',
            status: '미관제',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '321라 5678',
            vehicleModel: '토요타',
            status: '운행중',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '654마 9012',
            vehicleModel: '벤츠',
            status: '미운행',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '987바 3456',
            vehicleModel: '테슬라',
            status: '미운행',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '147사 7890',
            vehicleModel: '아우디',
            status: '운행중',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '258아 1234',
            vehicleModel: '포르쉐',
            status: '운행중',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '369자 5678',
            vehicleModel: '볼보',
            status: '운행중',
            icon: <RightIcon />,
        },
        {
            vehicleNumber: '159차 9012',
            vehicleModel: '폭스바겐',
            status: '운행중',
            icon: <RightIcon />,
        },
    ]
    return (
        <div>
            <div className={styles.componentsWrapper}>
                <div className={styles.buttonWrapper}>
                    <RoundButton color='secondary' onClick={() => {}} size='small'>
                        등록
                    </RoundButton>
                </div>
                <div className={styles.searchInputWrapper}>
                    <SearchInput icon='/icons/search-icon.svg' />
                </div>
            </div>
            <div className={styles.listWrapper}>
                <ListHeader />
                {mockLogData.map((item) => (
                    <ListItem key={item.id} data={item} variant={'log'} />
                ))}
            </div>

            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default LogPage
