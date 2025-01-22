import { style } from '@vanilla-extract/css'

import { vars } from '@/styles/theme.css'

export const container = style({
    width: '80%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px',
    gap: '30px',
    backgroundColor: vars.colors.white,
    borderRadius: '30px 30px 0 0',
})

export const buttonGroup = style({
    display: 'flex',
    gap: '10px',
})

export const tableHeader = style({
    padding: '8px',
    fontWeight: vars.fontWeights.bold,
    backgroundColor: vars.colors.gray[50],
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    textAlign: 'center',
    color: vars.colors.black,
})

export const tableCell = style({
    textAlign: 'center',
    padding: '8px',
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    borderRight: `1px solid ${vars.colors.gray[200]}`,
    color: vars.colors.black,
})

export const linkButton = style({
    color: vars.colors.white,
    backgroundColor: vars.colors.dark,
    fontWeight: vars.fontWeights.bold,
    padding: '16px 24px',
    textAlign: 'center',
    borderRadius: '8px',
    ':hover': {
        backgroundColor: vars.colors.gray[800],
    },
})
