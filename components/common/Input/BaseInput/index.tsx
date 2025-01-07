import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as styles from './styles.css'

interface BaseInputProps extends ComponentPropsWithoutRef<'input'> {
    type?: string
    isError?: boolean
    className?: string
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    ({ type = 'text', isError = false, placeholder, className = '', ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                placeholder={placeholder || '차량을 검색하세요.'}
                className={`${styles.baseInput} 
                ${isError && styles.errorInput}
                ${className}`}
                {...props}
            />
        )
    },
)

BaseInput.displayName = 'BaseInput'

export default BaseInput
