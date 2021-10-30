import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import styles from './Header.scss'

import { ThemeContext } from './ThemeContext'

function Header({title,  children}) {

    const { onToggleTheme } = useContext(ThemeContext)

    return (
        <div>
        <h1 className={styles.title}>{title}</h1>
        <Button
            onClick={ onToggleTheme }
        >
            Mudar a cor
        </Button>
        {children}
        <hr/>
        </div>
    )
}

export default Header

Header.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    title: `Titulo padrao`,
}