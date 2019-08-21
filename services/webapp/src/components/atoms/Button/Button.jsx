import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Button.module.scss'
import Text from 'components/atoms/Text'

const getClass = ({ tqRole, tqDisabled }) =>
    [
        styles.btn,
        ...[tqDisabled ? [styles.disabled] : []],
        ...[tqRole ? [styles[tqRole]] : []],
    ].join(' ')

const Button = ({ children, ...options }) => (
    <button
        className={getClass(options)}
    >
        <Text>
            {children}
        </Text>
    </button>
)

Button.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    tqRole: PropTypes.oneOf([ 'primary', 'secondary' ]),
    tqDisabled: PropTypes.bool,
}

Button.defaultProps = {
    children: 'i am a teapot',
    tqRole: 'primary',
    tqDisabled: false,
}

export default Button
