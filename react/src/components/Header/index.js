import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default class Header extends Component {
    static propTypes = {
        selectedMode: PropTypes.string.isRequired,
        onToggleMode: PropTypes.func.isRequired,
    }

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