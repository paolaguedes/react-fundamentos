import React from 'react'

import Header from './Header'
import Post from './Post'

const posts = [
	{ title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20},
	{ title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10},
	{ title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50},
]

function App() {
	return (
	<>
	<Header>
		<ul>
			<li><a href="#">oi</a></li>
			<li><a href="#">oi</a></li>
			<li><a href="#">oi</a></li>
		</ul>
	</Header>
		{
			posts.map( post => (
				<Post 
					key={post.title}
					likes={post.likes}
					post={{
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