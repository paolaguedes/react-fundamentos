import React from 'react'

import { Container } from './styles'

function Header({onToggleMode, selectedMode}) {

    return (
        <Container>
        <h1>Blog React</h1>
        <button 
            onClick={onToggleMode} 
            type="button"
        >
            {selectedMode == 'dark' ? '🌙' : '🔆'}
        </button>
        </Container>
    )
}

export default Header
