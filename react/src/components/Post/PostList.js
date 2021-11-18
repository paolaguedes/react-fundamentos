import React from 'react'
import Post from '../Post'

export default function PostList() {

  const posts = ([		
		{ id: Math.random(), title: 'Porque gatos são os melhores?', subtitle: 'Em meados da década...'},
		{ id: Math.random(), title: 'Como dar banho no seu gato', subtitle: 'Siga esse passo a passo...'},
		{ id: Math.random(), title: 'Descubra os segredos felinos', subtitle: 'Você sabia que seu gato pode...'},
	])

  return (
    <>
		{
			posts.map( post => (
				<Post 
					key={post.id}
					post={post}	
				/>
			))
		}
    </>
  )
}