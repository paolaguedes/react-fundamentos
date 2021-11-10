import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

import { Container, Subtitle } from './styles'

export default function Post(props){

    return(
        <Container>
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


Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
    }).isRequired,
}