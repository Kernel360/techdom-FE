import { Select } from '@mantine/core'

import { YEAR_OPTIONS, MONTH_OPTIONS, DAY_OPTIONS, HOUR_OPTIONS, MINUTE_OPTIONS } from './constants'
import * as styles from './styles.css'

interface DateTimeSelectProps {
    label: string
}

const DateTimeSelect = ({ label }: DateTimeSelectProps) => {
    return (
        <div className={styles.selectContainer}>
            <p className={styles.label}>{label}</p>
            <div className={styles.selectGroup}>
                <Select
                    withCheckIcon={false}
                    data={YEAR_OPTIONS}
                    defaultValue='2025'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={MONTH_OPTIONS}
                    defaultValue='01'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={DAY_OPTIONS}
                    defaultValue='01'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={HOUR_OPTIONS}
                    defaultValue='00'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
                <Select
                    withCheckIcon={false}
                    data={MINUTE_OPTIONS}
                    defaultValue='00'
                    styles={styles.selectStyles}
                    allowDeselect={false}
                />
            </div>
        </div>
    )
}

export default DateTimeSelect
