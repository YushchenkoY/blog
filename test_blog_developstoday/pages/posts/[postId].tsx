import Router, {useRouter} from 'next/router'
import Head from 'next/head';
import { ROUTES } from '../../constants/url';

export default function Post() {

    const router = useRouter()
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <div>one post</div>

            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>
        </>
    )
}