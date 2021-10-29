import React from 'react'
import PropTypes from 'prop-types'

function Post(props){
    // é possivel fazer fora ou dentro
    if(props.post.read){
        return <h2>{props.post.title} já foi lido</h2>
    }
    return(
        <>
        <article>
        <strong>
            {props.post.read && <s>{props.post.title}</s>}
            {!props.post.read && props.post.title}
        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>
            Remover
        </button>
        <br/>
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