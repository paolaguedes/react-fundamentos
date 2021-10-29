import React, { useState } from 'react'

import Header from './Header'
import Post from './Post'

import { ThemeProvider } from './ThemeContext'

function App() {

	const [posts, setPosts] = useState([		
		{ id: Math.random(), title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20, read: false},
		{ id: Math.random(), title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10, read: false},
		{ id: Math.random(), title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50, read: true},
		])

	function handleRefresh(){
		setPosts((prevState)=>[
			...prevState,
			{ 
				id: Math.random(),
				title: `Titulo#0${prevState.length+1}`,
				subtitle: `Subtitulo#0${prevState.length+1}`,
				likes: 50
			}
		])
	}

	function handleRemove(postId){
		setPosts((prevState)=>(
			prevState.filter(post => post.id != postId)
		))
	}

	return (
	<ThemeProvider>
	<Header>
		<h2>
			posts da semana
			<button onClick={handleRefresh}>atualizar</button>
		</h2>
	</Header>
		{
			posts.map( post => (
				<Post 
					key={post.id}
					onRemove={handleRemove}
					post={post}	
				/>
			))
		}
	</ThemeProvider>
	)
}

export default App