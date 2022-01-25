import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../styles/global'
import Layout from '../Layout'

import themes from '../../styles/themes'

export default class App extends Component {

	state = {
		mode: 'dark'
	}

	handleToggleMode = () => {
		this.setState(prevState => ({ 
			mode: prevState.mode == 'dark'?
			 'light' : 'dark'
		}))
	}

	render() {
		const { mode } = this.state

		return ( 
		<ThemeProvider theme={themes[mode] || themes.dark}>
		<GlobalStyle/>
		<Layout 
			onToggleMode={this.handleToggleMode}
			selectedMode={mode}
		/>
		</ThemeProvider>
		)
	}
}