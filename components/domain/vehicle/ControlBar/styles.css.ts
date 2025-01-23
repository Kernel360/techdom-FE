import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    zIndex: vars.zIndex.four,
})

export const searchInputWrapper = style({
    width: '390px',
})

export const buttonGroup = style({
    display: 'flex',
    gap: '12px',
    width: '200px',
})

export const button = style({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
})

export const linkButton = style({
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    fontWeight: vars.fontWeights.bold,
    width: '94px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    borderRadius: '30px',
    border: `1px solid ${vars.colors.gray[200]}`,
    boxShadow: `0px 4px 4px 0px ${vars.colors.shadow[100]}`,
    ':hover': {
        opacity: vars.opacity[80],
    },
})
