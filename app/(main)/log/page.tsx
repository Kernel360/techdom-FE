'use client'
import { useRouter } from 'next/navigation'

import Breadcrumb from '@/components/common/Breadcrumb'
import ControlBar from '@/components/domain/vehicle/ControlBar'
import ListHeader from '@/components/domain/vehicle/ListHeader'

import ListItem from './components/ListItem/index'
import { HEADER_TITLES } from './constants'
import { useLogData } from './hooks/useLogData'
import * as styles from './styles.css'
import { downloadExcel } from './utils/excel'

const LogPage = () => {
    const router = useRouter()
    const { logData, isLoading, error } = useLogData()

    const handleExcelButtonClick = () => {
        if (!logData?.content) return
        downloadExcel(logData.content)
    }

    const handleItemClick = (id: number) => {
        router.push(`/log/${id}`)
    }

    if (isLoading) {
        return <div> 로딩 중...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className={styles.container}>
            <Breadcrumb type={'운행기록'} />
            <div className={styles.contents}>
                <ControlBar onExcelButtonClick={handleExcelButtonClick} />
                <ListHeader headerTitles={HEADER_TITLES} />
                {logData?.content.map((log) => (
                    <ListItem key={log.id} data={log} onClick={() => handleItemClick(log.id)} />
                ))}
            </div>
            {/* TODO 페이지네이션 추가 */}
        </div>
    )
}

export default LogPage
