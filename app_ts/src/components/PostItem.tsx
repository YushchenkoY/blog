import React from 'react';
import { IOnePost } from '../posts'

interface IProps {
    data: IOnePost;
}


const PostItem = (props: IProps) => { 
    return (
        <div>{props.data.title}</div>
    )
}

export default PostItem