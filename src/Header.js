import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

import { ThemeContext } from './ThemeContext'

function Header({title,  children}) {

    const { onToggleTheme } = useContext(ThemeContext)

    return (
        <>
        <h1>{title}</h1>
        <Button
            onClick={ onToggleTheme }
        >
            Mudar a cor
        </Button>
        {children}
        <hr/>
        </>
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