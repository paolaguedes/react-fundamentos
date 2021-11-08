import React, { useMemo, useState, useEffect, Component } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../styles/global'
import Layout from '../Layout'

import themes from '../../styles/themes'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: 'dark'
		}
	}

	render() {
		const { mode } = this.state

		return ( 
		<ThemeProvider theme={themes[mode] || themes.dark}>
		<GlobalStyle/>
		<Layout 
			onToggleMode={() => {
				this.setState(prevState => ({ 
					mode: prevState.mode == 'dark'?
			 		'light' : 'dark'
				}))
			}}
			selectedMode={mode}
		/>
		</ThemeProvider>
		)
	}
}

// function App() {
// 	const [mode, setMode] = useState('dark')

// 	const currentMode = useMemo(() => {
// 		return themes[mode] || themes.dark
// 	}, [mode])

// 	function handleToggleMode() {
// 		setMode(prevState => prevState == 'dark' ? 'light' : 'dark')
// 	}

// 	useEffect(() => {
		
// 	})

// 	return (
// 	<ThemeProvider theme={currentMode}>
// 		<GlobalStyle/>
// 		<Layout 
// 			onToggleMode={handleToggleMode}
// 			selectedMode={mode}
// 		/>
// 	</ThemeProvider>
// 	)
// }

// export default App