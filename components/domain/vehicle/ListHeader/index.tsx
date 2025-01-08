import * as styles from './styles.css'

const ListHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <span className={styles.headerTitle}>차량번호</span>
            <span className={styles.headerTitle}>차종</span>
            <span className={styles.headerTitle}>차량현황</span>
            <span className={styles.headerIcon}>icon</span>
        </div>
    )
}

export default ListHeader
