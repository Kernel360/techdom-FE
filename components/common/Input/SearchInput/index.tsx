'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import BaseInput from '../BaseInput'

import * as styles from './styles.css'

interface SearchInputProps extends ComponentPropsWithoutRef<'input'> {
    icon?: string
    className?: string
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ icon, className = '', ...props }, ref) => {
    return (
        <div className={styles.container}>
            <BaseInput ref={ref} className={`${styles.input} ${className}`} {...props} />
            {icon && (
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt='서치인풋 아이콘' width={32} height={32} />
                </div>
            )}
        </div>
    )
})

SearchInput.displayName = 'SearchInput'

export default SearchInput
