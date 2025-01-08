import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const headerWrapper = style({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '16px',
    borderBottom: `1px solid ${styles.colors.gray[200]}`,
    color: styles.colors.gray[600],
})

export const headerTitle = style({
    flex: 1,
})

export const headerIcon = style({
    width: '24px',
    height: '24px',
    visibility: 'hidden',
})
