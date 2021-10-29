import React, { useState } from 'react'

import Header from './Header'
import Post from './Post'

function App() {

	const [posts, setPosts] = useState([		
		{ id: Math.random(), title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20},
		{ id: Math.random(), title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10},
		{ id: Math.random(), title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50},
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
	<>
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
					likes={post.likes}
					post={{
						id: post.id,
						title: post.title,
						subtitle: post.subtitle,
					}}	
				/>
			))
		}
	</>
	)
}

export default App