import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const itemWrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    color: styles.colors.black,
    fontWeight: styles.fontWeights.bold,
})

export const itemContent = style({
    flex: 1,
})

export const icon = style({
    width: '24px',
    height: '24px',
})
