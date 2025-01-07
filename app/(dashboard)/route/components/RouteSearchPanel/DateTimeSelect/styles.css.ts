import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const selectContainer = style({
    padding: '0 4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const selectGroup = style({
    display: 'flex',
    gap: '8px',
    marginBottom: '4px',
})

export const label = style({
    fontSize: '14px',
    color: styles.colors.gray[600],
})

export const selectStyles = {
    input: {
        padding: '8px',
        borderRadius: '8px',
        border: `1px solid ${styles.colors.gray[200]}`,
        backgroundColor: 'white',
        fontSize: styles.fontSizes.small,
        color: styles.colors.gray[700],
        cursor: 'pointer',
        height: '38px',
        width: '84px',
    },
    dropdown: {
        borderRadius: '8px',
        border: `1px solid ${styles.colors.gray[200]}`,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    item: {
        fontSize: styles.fontSizes.small,
        color: styles.colors.gray[700],
        ':hover': {
            backgroundColor: styles.colors.gray[50],
        },
    },
}
