import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayout';
import { fetching } from '../../redux/actions/postAction';
import { IPostsState } from '../../redux/reducers/postsReducer';
import { State } from '../../types/state';
import Link from 'next/link'




export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector<State, IPostsState['data']>(state => state.posts.data);

    useEffect(() => {
        dispatch(fetching());
    }, []);

    return (
        <MainLayout page={"Posts page"}>
            <div>
            {posts.map(post => {
                const croppedBody = post.body.length > 50 ? post.body.substring(0, 100) + '...' : post.body;
                return (
                    <ul>
                        <li>
                            <Link href={'/posts/post'+post.id} key={post.id} >
                                <a>
                                    {post.title}
                                    {croppedBody}
                                </a>
                            </Link>
                        </li>
                    </ul>
                )
            })}
            </div>
        </ MainLayout>
    )
}
