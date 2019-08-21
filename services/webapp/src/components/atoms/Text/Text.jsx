import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.scss'

const getClass = ({ tqRole, tqColor }) =>
    [
        styles.text,
        ...[tqRole ? [styles[`role-${tqRole}`]] : []],
        ...[tqColor ? [styles[`color-${tqColor}`]] : []],
    ].join(' ')

const Text = ({ children, ...options }) => (
    <span className={getClass(options)}>{children}</span>
)

Text.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    tqRole: PropTypes.oneOf([ 'normal', 'title1', 'title2' ]),
    tqColor: PropTypes.oneOf([ 'normal', 'contrast' ]),
}

Text.defaultProps = {
    children: 'i am a teapot',
    tqRole: 'normal',
    tqColor: 'normal',
}

export default Text
