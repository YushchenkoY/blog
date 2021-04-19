import Router, {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayout';
import { ROUTES } from '../../constants/routes';
import React from 'react';

export default function Post(props) {

    const router = useRouter()
    return (
        <MainLayout page={"Post"}>
            <div>{props.post.title}</div>
            <div>{props.post.body}</div>
            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>
        </MainLayout>
    )
}
