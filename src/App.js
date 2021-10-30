import React, { useState } from 'react'

import Header from './Header'
import Post from './Post'

import styles from './App.scss'

import { ThemeProvider } from './ThemeContext'

function App() {

	const [posts, setPosts] = useState([		
		{ id: Math.random(), title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20, read: false, removed: true},
		{ id: Math.random(), title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10, read: false, removed: true},
		{ id: Math.random(), title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50, read: true, removed: true},
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
		setPosts((prevState) => prevState.map(
			post => (
				post.id == postId
				? {...post, removed: false}
				: post
				)
		))
	}

	return (
	<ThemeProvider>
	<Header>
		<h2 className={styles.title}>
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