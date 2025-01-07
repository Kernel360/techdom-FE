'use client'

import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { BaseButton } from '../BaseButton'

import * as styles from './style.css'

export type ColorType = 'dark' | 'primary' | 'white' | 'error'

interface SquareButtonProps extends ComponentPropsWithoutRef<'button'> {
    children?: ReactNode
    color?: ColorType
}
const SquareButton = ({ children, color = 'primary', ...props }: SquareButtonProps) => {
    return (
        <BaseButton className={styles.button[color]} {...props}>
            {children}
        </BaseButton>
    )
}
export default SquareButton
