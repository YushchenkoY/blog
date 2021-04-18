import Router, {useRouter} from 'next/router'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout';
import { ROUTES } from '../../constants/routes';

export default function Post() {

    const router = useRouter()
    return (
        <MainLayout>
            <Head>
                <title>Home page</title>
            </Head>
            <div>one post</div>

            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>
        </MainLayout>
    )
}