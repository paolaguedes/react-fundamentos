import React from 'react'
import PropTypes from 'prop-types'

function Post(props){
    return(
        <>
        <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>
            Remover
        </button>
        <br/>
        <small>{props.post.subtitle}</small>
        <br/>
        <small>Likes: {props.likes / 2}</small>
        </article>
        <br/>
        </>
    )
}

export default Post

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}