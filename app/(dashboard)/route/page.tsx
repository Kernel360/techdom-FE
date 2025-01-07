import Map from '@/app/(dashboard)/location/components/Map'
import RouteSearchPanel from '@/app/(dashboard)/route/components/RouteSearchPanel'

import * as styles from './styles.css'

const RoutePage = () => {
    return (
        <div className={styles.container}>
            <Map />
            <RouteSearchPanel />
        </div>
    )
}

export default RoutePage
