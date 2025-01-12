import { style } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

export const container = style({
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

export const searchableDate = style({
    fontSize: styles.fontSizes.small,
    marginBottom: '8px',
    padding: '8px 12px',
    backgroundColor: styles.colors.gray[50],
    border: `1px solid ${styles.colors.gray[200]}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
})

export const searchableDateSpan = style({
    padding: '4px 8px',
    color: styles.colors.primary,
    fontWeight: styles.fontWeights.bold,
    backgroundColor: 'white',
    borderRadius: '4px',
    fontSize: styles.fontSizes.xsmall,
    border: `1px solid ${styles.colors.primary}`,
})
