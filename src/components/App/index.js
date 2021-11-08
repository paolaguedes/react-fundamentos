import React, { useMemo, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../styles/global'
import Layout from '../Layout'

import themes from '../../styles/themes'

function App() {
	const [mode, setMode] = useState('dark')

	const currentMode = useMemo(() => {
		return themes[mode] || themes.dark
	}, [mode])

	function handleToggleMode() {
		setMode(prevState => prevState == 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		
	})

	return (
	<ThemeProvider theme={currentMode}>
		<GlobalStyle/>
		<Layout 
			onToggleMode={handleToggleMode}
			selectedMode={mode}
		/>
	</ThemeProvider>
	)
}

export default App