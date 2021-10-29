import React from 'react'
import PropTypes from 'prop-types'

function Header({title, children}) {
    return (
        <>
        <h1>{title}</h1>
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