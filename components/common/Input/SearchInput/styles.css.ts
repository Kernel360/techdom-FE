import { style } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
})

export const input = style({
    paddingRight: '40px',
})

export const iconWrapper = style({
    position: 'absolute',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '48px',
    cursor: 'pointer',
})
