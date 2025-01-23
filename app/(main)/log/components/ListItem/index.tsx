import Badge from '@/components/common/Badge'
import { RightIcon } from '@/public/icons'
import { ListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface ListItemProps {
    data: ListItemModel
    onClick?: () => void
}

const ListItem = ({ data, onClick }: ListItemProps) => {
    const { vehicleNumber, vehicleModel, drivingDays, totalDistance, status } = data

    return (
        <button className={styles.container} onClick={onClick} type='button'>
            <ul className={styles.list}>
                <li className={styles.itemWrapper}>{vehicleNumber}</li>
                <li className={styles.itemWrapper}>{vehicleModel}</li>
                <li className={styles.itemWrapper}>{drivingDays}일</li>
                <li className={styles.itemWrapper}>{totalDistance.toLocaleString('ko-KR')}km</li>
                <li className={styles.itemWrapper}>
                    <Badge shape={'rectangle'} variant={status} />
                </li>
            </ul>
            <div className={styles.icon}>
                <RightIcon />
            </div>
        </button>
    )
}

export default ListItem
