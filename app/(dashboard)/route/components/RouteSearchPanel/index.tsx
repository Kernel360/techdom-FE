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
                <p className={styles.label}>시작 일시</p>
                <div className={styles.selectGroup}>
                    <select className={styles.select}>
                        <option>2024년</option>
                    </select>
                    <select className={styles.select}>
                        <option>05월</option>
                    </select>
                    <select className={styles.select}>
                        <option>06월</option>
                    </select>
                    <select className={styles.select}>
                        <option>00시</option>
                    </select>
                    <select className={styles.select}>
                        <option>30분</option>
                    </select>
                </div>
                <p className={styles.label}>종료 일시</p>
                <div className={styles.selectGroup}>
                    <select className={styles.select}>
                        <option>2024년</option>
                    </select>
                    <select className={styles.select}>
                        <option>05월</option>
                    </select>
                    <select className={styles.select}>
                        <option>06월</option>
                    </select>
                    <select className={styles.select}>
                        <option>00시</option>
                    </select>
                    <select className={styles.select}>
                        <option>30분</option>
                    </select>
                </div>
            </div>
            <SquareButton>경로 조회하기</SquareButton>
        </div>
    )
}

export default RouteSearchPanel
