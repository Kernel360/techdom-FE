import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const inputWrapper = style({
    width: '100%',
    position: 'relative',
})

export const baseInput = style({
    backgroundColor: styles.colors.white,
    border: `1px solid ${styles.colors.gray[800]}`,
    fontSize: styles.fontSizes.small,
    padding: '16px 18px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    borderRadius: '30px',
    width: '100%',
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
