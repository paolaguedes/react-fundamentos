import React, { Component } from 'react'

import { Container } from './styles'

export default class Header extends React.Component {
    render() {
        const { onToggleMode, selectedMode } = this.props
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
}
