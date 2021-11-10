import React from 'react'
import PropTypes from 'prop-types'

export default function PostHeader(props){
    return(
        <>
        <strong>
            {props.post.read && <s>{props.post.title}</s>}
            {!props.post.read && props.post.title}
        </strong>
        <br/>
        </>
    )
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}