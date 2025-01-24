'use client'

import Breadcrumb from '@/components/common/Breadcrumb'
import LinkButton from '@/components/common/Button/LinkButton'
import { RoundButton } from '@/components/common/Button/RoundButton'

import * as styles from './styles.css'

const DetailPage = () => {
    const mockData = {
        taxStartPeriod: '2020-01-01',
        taxEndPeriod: '2025-01-01',
        businessInfo: {
            businessName: '카카오',
            businessRegistrationNumber: '123-45-67890',
        },
        taxPeriodDistance: 920,
        taxPeriodBusinessDistance: 8,
        businessUseRatio: 42,
        vehicleType: {
            vehicleNumber: '457나7179',
            vehicleModel: 'GV90',
        },
        records: [
            {
                usageDate: '2025-01-01',
                user: {
                    departmentName: '세일팀',
                    name: '회장',
                },
                drivingInfo: {
                    drivingBefore: 10000,
                    drivingAfter: 10030,
                    totalDriving: 30,
                    businessDrivingDetails: {
                        usePurpose: 'NORMAL',
                        drivingDistance: 30,
                    },
                    notes: '일반업무용',
                },
            },
        ],
    }

    return (
        <div className={styles.container}>
            <Breadcrumb type={'운행일지'} />
            <div className={styles.buttonGroup}>
                <RoundButton color='secondary' size={'small'}>
                    엑셀
                </RoundButton>
                <RoundButton color='secondary' size={'small'}>
                    삭제
                </RoundButton>
            </div>

            <table>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        자동차 등록번호
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        차량종류
                    </th>
                </tr>
                <tr>
                    <td className={styles.tableCell}>{mockData.vehicleType.vehicleNumber}</td>
                    <td className={styles.tableCell}>{mockData.vehicleType.vehicleModel}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th scope='row' rowSpan={3} className={styles.tableHeader}>
                        과세기간
                    </th>
                    <td rowSpan={3} className={styles.tableCell}>
                        {mockData.taxStartPeriod} - {mockData.taxEndPeriod}
                    </td>
                    <th scope='row' rowSpan={2} className={styles.tableHeader}>
                        업무승용차 운행기록부
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        상호명
                    </th>
                    <td className={styles.tableCell}>{mockData.businessInfo.businessName}</td>
                </tr>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        사업자 등록번호
                    </th>
                    <td className={styles.tableCell}>{mockData.businessInfo.businessRegistrationNumber}</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th scope='row' rowSpan={2} className={styles.tableHeader}>
                        사용일자
                    </th>
                    <th scope='row' colSpan={8} className={styles.tableHeader}>
                        운행내역
                    </th>
                </tr>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        부서
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        성명
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        전 계기판 거리
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        후 계기판 거리
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        주행거리
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        출근용
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        일반업무용
                    </th>
                    <th scope='row' className={styles.tableHeader}>
                        비고
                    </th>
                </tr>
                {mockData.records.map((data) => (
                    <tr key={data.drivingInfo.drivingAfter}>
                        <td className={styles.tableCell}>{data.usageDate}</td>
                        <td className={styles.tableCell}>{data.user.departmentName}</td>
                        <td className={styles.tableCell}>{data.user.name}</td>
                        <td className={styles.tableCell}>{data.drivingInfo.drivingBefore}km</td>
                        <td className={styles.tableCell}>{data.drivingInfo.drivingAfter}km</td>
                        <td className={styles.tableCell}>{data.drivingInfo.totalDriving}km</td>
                        <td className={styles.tableCell}>
                            {data.drivingInfo.businessDrivingDetails.usePurpose === 'COMMUTE'
                                ? data.drivingInfo.businessDrivingDetails.drivingDistance + 'km'
                                : ''}
                        </td>
                        <td className={styles.tableCell}>
                            {data.drivingInfo.businessDrivingDetails.usePurpose !== 'COMMUTE'
                                ? data.drivingInfo.businessDrivingDetails.drivingDistance + 'km'
                                : ''}
                        </td>
                        <td className={styles.tableCell}>{data.drivingInfo.notes}</td>
                    </tr>
                ))}
            </table>
            <table>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        과세기간 총 주행 거리
                    </th>
                    <td className={styles.tableCell}>1,000km</td>
                    <th scope='row' className={styles.tableHeader}>
                        과세기간 업무용 사용 거리
                    </th>
                    <td className={styles.tableCell}>1,000km</td>
                    <th scope='row' className={styles.tableHeader}>
                        업무사용비율
                    </th>
                    <td className={styles.tableCell}>100%</td>
                </tr>
            </table>

            <LinkButton href={'/log'} className={styles.linkButton}>
                일별 및 시간별 조회
            </LinkButton>
        </div>
    )
}

export default DetailPage
