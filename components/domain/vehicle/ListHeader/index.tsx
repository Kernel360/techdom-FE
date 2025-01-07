import * as styles from './styles.css'

const ListHeader = () => {
    return (
        <div className={styles.itemWrapper}>
            <span className={styles.itemContent}>No</span>
            <span className={styles.itemContent}>차량번호</span>
            <span className={styles.itemContent}>차종</span>
            <span className={styles.itemContent}>자동차 운행일자</span>
            <span className={styles.itemContent}>차량현황</span>
        </div>
    )
}

export default ListHeader
