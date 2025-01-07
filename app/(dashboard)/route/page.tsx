import Map from '@/app/(dashboard)/location/components/Map'
import { BaseButton } from '@/components/common/Button/BaseButton'
import { RoundButton } from '@/components/common/Button/RoundButton'
import SquareButton from '@/components/common/Button/SquareButton'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const RoutePage = () => {
    return (
        <div className={styles.container}>
            <Map />
            <div className={styles.searchContainer}>
                <div className={styles.vehicleNumberSearchContainer}>
                    <h3 className={styles.title}>차량 검색</h3>
                    <SearchInput
                        style={{
                            borderRadius: '10px',
                        }}
                        className={styles.input}
                        icon='/icons/pink-search-icon.svg'
                        placeholder='차량번호 검색'
                        size='large'
                    />
                </div>

                <div className={styles.periodSearch}>
                    <h3 className={styles.title}>기간 검색</h3>
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

                <RoundButton
                // style={{
                //     width: '100%',
                //     height: '54px',
                // }}
                >
                    경로 조회하기
                </RoundButton>
                <SquareButton
                    color='primary'
                    // style={{
                    //     width: '100%',
                    //     height: '54px',
                    // }}
                >
                    경로 조회하기
                </SquareButton>
                <BaseButton
                // style={{
                //     width: '100%',
                //     height: '54px',
                // }}
                >
                    경로 조회하기
                </BaseButton>
            </div>
        </div>
    )
}

export default RoutePage
