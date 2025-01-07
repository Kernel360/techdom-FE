import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const panel = style({
    padding: '24px',
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
})

export const searchSection = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

export const sectionTitle = style({
    fontSize: '18px',
    fontWeight: styles.fontWeights.bold,
    color: styles.colors.gray[800],
    marginBottom: '8px',
})

export const label = style({
    fontSize: '14px',
    color: styles.colors.gray[600],
    marginBottom: '4px',
})

export const selectGroup = style({
    display: 'flex',
    gap: '8px',
    marginBottom: '4px',
})

export const select = style({
    padding: '8px',
    borderRadius: '8px',
    border: `1px solid ${styles.colors.gray[200]}`,
    backgroundColor: 'white',
    fontSize: '14px',
    color: styles.colors.gray[700],
    cursor: 'pointer',
    ':hover': {
        borderColor: styles.colors.gray[300],
    },
    ':focus': {
        outline: 'none',
        borderColor: styles.colors.primary,
        boxShadow: `0 0 0 2px ${styles.colors.primary}25`,
    },
})
