import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Header from '../Header'
import { MainFooter } from '../Footer'
import Routes from '../../Routes'
import { ThemeProvider } from '../../context/ThemeContext'
import { Nav } from './styles'

function Layout({onToggleMode, selectedMode}) {

	return (
	<BrowserRouter>
	<ThemeProvider>
	<Header 
		onToggleMode={onToggleMode}
		selectedMode={selectedMode}
	/>
	<Nav>
		<Link to="/">Home</Link>
		<Link to="/posts">Posts</Link>
	</Nav>

	<Routes/>
	<MainFooter 
			onToggleMode={onToggleMode}
			selectedMode={selectedMode}
	/>
	</ThemeProvider>
	</BrowserRouter>
	)
}

export default Layout