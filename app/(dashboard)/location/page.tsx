import Map from '@/app/(dashboard)/location/components/Map'
import VehicleStatus from '@/app/(dashboard)/location/components/VehicleStatus'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const LocationPage = () => {
    return (
        <div className={styles.container}>
            <Map />
            <div className={styles.searchInputWrapper}>
                <SearchInput icon='/icons/search-icon.svg' />
            </div>
            <div className={styles.vehicleStatusWrapper}>
                <VehicleStatus />
            </div>
        </div>
    )
}

export default LocationPage
