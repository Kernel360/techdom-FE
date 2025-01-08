import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const base = style({
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: styles.fontWeights.bold,
    border: `1px solid ${styles.colors.gray[200]}`,
    borderRadius: '8px',
    ':disabled': {
        cursor: 'not-allowed',
        opacity: styles.opacity[50],
        color: styles.colors.black,
    },
})
