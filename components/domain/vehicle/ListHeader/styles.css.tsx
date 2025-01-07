import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const itemWrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    color: styles.colors.gray[600],
})

export const itemContent = style({
    flex: 1,
})
