import React from 'react'

import Header from '../Header'
import Post from '../Post'
import { MainFooter } from '../Footer'

import { ThemeProvider } from '../../context/ThemeContext'

function Layout({onToggleMode, selectedMode}) {

	const posts = ([		
		{ id: Math.random(), title: 'Porque gatos são os melhores?', subtitle: 'Em meados da década...'},
		{ id: Math.random(), title: 'Como dar banho no seu gato', subtitle: 'Siga esse passo a passo...'},
		{ id: Math.random(), title: 'Descubra os segredos felinos', subtitle: 'Você sabia que seu gato pode...'},
		])

	return (
	<ThemeProvider>
	<Header 
		onToggleMode={onToggleMode}
		selectedMode={selectedMode}
	/>
		{
			posts.map( post => (
				<Post 
					key={post.id}
					post={post}	
				/>
			))
		}
		<MainFooter 
			onToggleMode={onToggleMode}
			selectedMode={selectedMode}
		/>
	</ThemeProvider>
	)
}

export default Layout