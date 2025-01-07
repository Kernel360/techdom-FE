'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as styles from './style.css'

interface BaseButtonProps extends ComponentPropsWithoutRef<'button'> {
    className?: string
    children?: ReactNode
}

export const BaseButton = ({ children, onClick, className, ...props }: BaseButtonProps) => {
    return (
        <button onClick={onClick} className={`${styles.base} ${className}`} {...props}>
            {children}
        </button>
    )
}
