import { style, styleVariants } from '@vanilla-extract/css'

import { styles } from '@/styles/theme.css'

import { BADGE_SHAPE, OPERATION_STATUS, VEHICLE_ROLE } from './constants'

export const base = style({
    padding: '4px 0',
    border: '1.5px solid',
})

export const shape = styleVariants({
    [BADGE_SHAPE.RECTANGLE]: {
        paddingLeft: '12px',
        paddingRight: '12px',
        fontSize: styles.fontSizes.medium,
        borderRadius: '4px',
    },
    [BADGE_SHAPE.CIRCLE]: {
        paddingLeft: '16px',
        paddingRight: '16px',
        fontWeight: 'bold',
        borderRadius: '14px',
    },
})

const redStyle = {
    color: styles.colors.red,
    backgroundColor: styles.colors.pink[300],
}

const pinkStyle = {
    color: styles.colors.pink[600],
    backgroundColor: styles.colors.pink[100],
}

const greenStyle = {
    color: styles.colors.green[400],
    backgroundColor: styles.colors.green[200],
}

export const variant = styleVariants({
    [OPERATION_STATUS.OPERATING]: pinkStyle,
    [OPERATION_STATUS.NOT_OPERATING]: greenStyle,
    [OPERATION_STATUS.NOT_CONTROLLED]: redStyle,
    [VEHICLE_ROLE.GENERAL]: pinkStyle,
    [VEHICLE_ROLE.COMMUTE]: greenStyle,
})
