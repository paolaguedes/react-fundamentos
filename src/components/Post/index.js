import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

import { Container, Subtitle } from './styles'

function Post(props){

    return(
        <Container removed={props.post.removed}>
        <PostHeader
            post={{
                id: props.post.id,
                title: props.post.title,
            }}
        />
        <Subtitle>{props.post.subtitle}</Subtitle>
        </Container>
    )
}

export default Post

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}