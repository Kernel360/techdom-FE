import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const inputWrapper = style({
    width: '100%',
    position: 'relative',
})

export const baseInput = style({
    width: '100%',
    height: '48px',
    padding: '16px',

    color: styles.colors.gray[800],
    backgroundColor: styles.colors.white,
    border: `1px solid ${styles.colors.gray[200]}`,
    boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[100]}`,
    borderRadius: '30px',

    ':focus': {
        outline: 'none',
    },
    ':disabled': {
        backgroundColor: styles.colors.gray[200],
    },
})

export const errorInput = style({
    border: `1px solid ${styles.colors.error}`,
})
