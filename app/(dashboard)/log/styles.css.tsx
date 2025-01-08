import { style } from '@vanilla-extract/css'

export const componentsWrapper = style({
    position: 'relative',
    width: '100%',
    height: '80px',
})
export const buttonWrapper = style({
    position: 'absolute',
    top: '2rem',
    right: 'calc(2rem + 390px + 2rem)',
})
export const searchInputWrapper = style({
    width: '390px',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
})
export const listWrapper = style({
    padding: '80px 100px',
    display: 'flex',
    flexDirection: 'column',
    gap: ' 16px',
})
