import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

function Post(props){
    if(props.post.read){
        return <h2>{props.post.title} já foi lido</h2>
    }
    return(
        <>
        <article>
        <PostHeader
            onRemove={props.onRemove}
            post={{
                id: props.post.id,
                title: props.post.title,
                read: props.post.read,
            }}
        />
        <small>{props.post.subtitle}</small>
        <br/>
        <small>Likes: {props.post.likes / 2}</small>
        </article>
        <br/>
        </>
    )
}

export default Post

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
}