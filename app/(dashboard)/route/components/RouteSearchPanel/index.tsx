import DateTimeSelect from '@/app/(dashboard)/route/components/RouteSearchPanel/DateTimeSelect'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const RouteSearchPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>차량 검색</h3>
                <SearchInput
                    style={{
                        borderRadius: '8px',
                        boxShadow: 'none',
                    }}
                    icon='/icons/pink-search-icon.svg'
                    placeholder='차량번호 검색'
                />
            </div>

            <div className={styles.searchSection}>
                <h3 className={styles.sectionTitle}>기간 검색</h3>
                <DateTimeSelect label='시작 일시' />
                <DateTimeSelect label='종료 일시' />
            </div>
            <SquareButton>경로 조회하기</SquareButton>
        </div>
    )
}

export default RouteSearchPanel
