import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Button.module.css'

const Button = ({ children, tqRole }) => (
    <button
        className={`${styles.btn} ${styles[`btn--${tqRole}`]}`}
    >{children}</button>
)

Button.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    tqRole: PropTypes.oneOf([ 'primary', 'secondary', 'disabled' ]),
}

Button.defaultProps = {
    children: 'i am a teapot',
    tqRole: 'primary',
}

export default Button
