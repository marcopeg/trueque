/* eslint-disable */
import React from 'react'
import Button from 'components/atoms/Button'
import * as styles from './Header.module.css'

const Header = ({ children }) => (
    <div>
        <Button>signup</Button>
        <h2 className={styles.title}>{children}</h2>
        <Button>login</Button>
    </div>
)

export default Header
