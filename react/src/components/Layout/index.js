import React from 'react'

import { BrowserRouter, Link } from 'react-router-dom'
import Header from '../Header'
import { MainFooter } from '../Footer'
import Routes from '../../Routes'
import { ThemeProvider } from '../../context/ThemeContext'
import { Nav } from './styles'

export default class Layout extends React.Component {

	render() {
	const {onToggleMode, selectedMode} = this.props

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
			<Link to="/posts/1234">Post</Link>
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
}
