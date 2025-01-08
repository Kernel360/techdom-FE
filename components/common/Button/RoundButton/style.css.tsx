import { recipe } from '@vanilla-extract/recipes'

import { styles } from '@/styles/theme.css'

export const button = recipe({
    base: {
        backgroundColor: styles.colors.transparent[500],
        fontSize: styles.fontSizes.medium,
        borderRadius: '30px',
        ':hover': {
            backgroundColor: styles.colors.gray[50],
        },
    },
    variants: {
        size: {
            small: {
                width: '76px',
                height: '48px',
                backgroundColor: styles.colors.white,
                border: `1px solid ${styles.colors.gray[200]}`,
                boxShadow: `0px 4px 4px 0px ${styles.colors.shadow[100]}`,
            },
            large: {
                color: styles.colors.primary,
                height: '60px',
                padding: '16px 24px',
            },
        },
        color: {
            primary: {
                color: styles.colors.primary,
            },
            secondary: {
                color: styles.colors.black,
            },
        },
    },
    defaultVariants: {
        size: 'large',
        color: 'primary',
    },
})
