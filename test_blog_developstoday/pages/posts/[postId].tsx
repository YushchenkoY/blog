import Router, {useRouter} from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayout';
import { ROUTES } from '../../constants/routes';
import React, {useEffect, useState} from 'react';
import { fetchingDetails, sendCommentRequest } from '../../redux/actions/postAction';
import { State } from '../../types/state';
import { IPostsState } from '../../redux/reducers/postsReducer';


export default function Post(props) {
    const dispatch = useDispatch();
    const post = useSelector<State, IPostsState['details']>(state => state.posts.details);
    const [comment, setComment] = useState('');
    const router = useRouter();
    const {postId} = router.query;

    useEffect(() => {
        if (!postId) return;

        dispatch(fetchingDetails(postId as string));
    }, [postId]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(sendCommentRequest(postId as string, comment));
    };

    return (
        <MainLayout page={"Post"}>
            {/* <div>{props.post.title}</div> */}
            {/* <div>{props.post.body}</div> */}
            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>

            {post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <div>
                        {post.comments.map(comment => {
                            return (<div key={comment.id}>{comment.body}</div>)
                        })}
                    </div>
                    <form>
                        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleButtonClick}>Send</button>
                    </form>
                </div>
            )}
        </MainLayout>
    )
}
