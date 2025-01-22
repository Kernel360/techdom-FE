'use client'

import Breadcrumb from '@/components/common/Breadcrumb'
import LinkButton from '@/components/common/Button/LinkButton'
import { RoundButton } from '@/components/common/Button/RoundButton'

import * as styles from './styles.css'

const DetailPage = () => {
    // TODO: 실제 데이터로 교체하기
    const mockData = {
        vehicleNumber: '123가4567',
        vehicleModel: '제네시스',
        taxStartPeriod: '2024-01-01',
        taxEndPeriod: '2024-12-31',
        businessId: 1,
        businessName: '무지개렌트',
        businessRegistrationNumber: '123-45-67890',
        usageDate: '2024-01-14',
        userId: 1,
        departmentName: '영업팀',
        name: '홍길동',
        mileageBefore: 50000,
        mileageAfter: 50150,
        totalMileage: 150,
        commutingMileage: 30,
        businessMileage: 120,
        notes: '거래처 방문',
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
                    <td className={styles.tableCell}>{mockData.vehicleNumber}</td>
                    <td className={styles.tableCell}>{mockData.vehicleModel}</td>
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
                    <td className={styles.tableCell}>{mockData.businessName}</td>
                </tr>
                <tr>
                    <th scope='row' className={styles.tableHeader}>
                        사업자 등록번호
                    </th>
                    <td className={styles.tableCell}>{mockData.businessRegistrationNumber}</td>
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
                <tr>
                    <td className={styles.tableCell}>{mockData.usageDate}</td>
                    <td className={styles.tableCell}>{mockData.departmentName}</td>
                    <td className={styles.tableCell}>{mockData.name}</td>
                    <td className={styles.tableCell}>{mockData.mileageBefore}km</td>
                    <td className={styles.tableCell}>{mockData.mileageAfter}km</td>
                    <td className={styles.tableCell}>{mockData.totalMileage}km</td>
                    <td className={styles.tableCell}>{mockData.commutingMileage}km</td>
                    <td className={styles.tableCell}>{mockData.businessMileage}km</td>
                    <td className={styles.tableCell}>{mockData.notes}</td>
                </tr>
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
