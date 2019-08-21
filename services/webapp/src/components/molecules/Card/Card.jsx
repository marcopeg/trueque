import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Card.module.scss'
import Text from 'components/atoms/Text'

const getClass = ({ tqRole }) =>
    [
        styles.card,
        ...[tqRole ? [styles[tqRole]] : []],
    ].join(' ')

const Card = ({ children, tqRole }) => (
    <div className={getClass({ tqRole })}>
        {typeof children === 'string' ? (
            <Text
                tqColor={tqRole === 'primary' ? 'contrast' : null}
                children={children}
            />
        ) : children}
    </div>
)

Card.propTypes = {
    children: PropTypes.any, // eslint-disable-line
    tqRole: PropTypes.oneOf([ 'normal', 'primary' ]),
}

Card.defaultProps = {
    children: 'i am a teapot',
    tqRole: 'normal',
}

export default Card
