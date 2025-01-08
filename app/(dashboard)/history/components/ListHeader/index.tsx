import * as styles from './styles.css'

const ListHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <span className={styles.headerTitle}>차량번호</span>
            <span className={styles.headerTitle}>부서명</span>
            <span className={styles.headerTitle}>이름</span>
            <span className={styles.headerTitle}>운행일수</span>
            <span className={styles.headerTitle}>평균운행거리</span>
            <span className={styles.headerTitle}>평균운행시간</span>
            <span className={styles.headerTitle}>총운행거리</span>
            <span className={styles.headerTitle}>운행률</span>
            <span className={styles.headerIcon}>icon</span>
        </div>
    )
}

export default ListHeader
