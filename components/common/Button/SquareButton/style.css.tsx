import { styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const button = styleVariants({
    primary: {
        backgroundColor: styles.colors.primary,
        color: styles.colors.white,
        ':hover': {
            opacity: styles.opacity[80],
        },
    },
    white: {
        backgroundColor: styles.colors.white,
        color: styles.colors.black,
        border: `1px solid ${styles.colors.black}`,
        ':hover': {
            backgroundColor: styles.colors.gray[50],
        },
    },
    error: {
        backgroundColor: styles.colors.error,
        color: styles.colors.white,
        ':hover': {
            opacity: styles.opacity[80],
        },
    },
    dark: {
        backgroundColor: styles.colors.dark,
        color: styles.colors.white,
        ':hover': {
            backgroundColor: styles.colors.gray[800],
        },
    },
})
