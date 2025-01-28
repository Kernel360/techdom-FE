import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    padding: '16px',
    position: 'absolute',
    top: '6.5rem',
    right: '2rem',
    zIndex: vars.zIndex.header,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.gray[800],
    backgroundColor: vars.colors.transparent[800],
    borderRadius: '14px',
})

export const itemContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const titleWrapper = style({
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const circle = style({
    width: '16px',
    height: '16px',
    backgroundColor: vars.colors.pink[600],
    borderRadius: '50%',
})

export const title = style({})

export const count = style({
    fontSize: vars.fontSizes.xxlarge,
    fontWeight: vars.fontWeights.bold,
})

export const bar = style({
    width: '112px',
    height: '14px',
    backgroundColor: vars.colors.gray[200],
    borderRadius: '20px',
})
