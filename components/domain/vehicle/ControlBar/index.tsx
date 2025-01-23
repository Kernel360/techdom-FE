import Image from 'next/image'

import LinkButton from '@/components/common/Button/LinkButton'
import { RoundButton } from '@/components/common/Button/RoundButton'
import SearchInput from '@/components/common/Input/SearchInput'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useSearchSingleVehicle } from '@/hooks/useSearchSingleVehicle'

import * as styles from './styles.css'

interface ControlBarProps {
    onExcelButtonClick?: () => void
}

const ControlBar = ({ onExcelButtonClick }: ControlBarProps) => {
    const { modalMessage, isOpen, searchTerm, handleVehicleSearch, handleSearchChange, closeModal } =
        useSearchSingleVehicle()

    return (
        <div className={styles.container}>
            <div className={styles.searchInputWrapper}>
                <SearchInput
                    icon='/icons/search-icon.svg'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleVehicleSearch}
                />
            </div>
            <div className={styles.buttonGroup}>
                <RoundButton size={'small'} color={'secondary'} onClick={onExcelButtonClick}>
                    <div className={styles.button}>
                        <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                        엑셀
                    </div>
                </RoundButton>
                <LinkButton href={'/log/register'}>
                    <div className={styles.linkButton}>
                        <Image src='/icons/white-add-icon.svg' alt='add' width={18} height={18} />
                        등록
                    </div>
                </LinkButton>
            </div>
            <Modal
                isOpen={isOpen}
                message={modalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default ControlBar
