import Map from '@/app/(dashboard)/location/components/Map'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const RoutePage = () => {
    return (
        <div className={styles.container}>
            <Map />
            <div className={styles.searchInputWrapper}>
                <SearchInput icon='/icons/search-icon.svg' size='large' />
            </div>
            {/* <div className={styles.vehicleStatusWrapper}> */}
            {/* <VehicleStatus /> */}
            {/* </div> */}
        </div>
    )
}

export default RoutePage
