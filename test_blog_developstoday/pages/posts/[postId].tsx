import Router, {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayout';
import { ROUTES } from '../../constants/routes';

export default function Post() {

    const router = useRouter()
    return (
        <MainLayout page={"Post"}>
            <div>one post</div>
            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>
        </MainLayout>
    )
}