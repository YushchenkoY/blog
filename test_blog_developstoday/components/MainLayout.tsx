import Link from 'next/link'
import { ROUTES } from '../constants/routes';


export default function MainLayout({children}) {
    return (
        <>
        <nav>
        <Link href={ROUTES.home}><a>Home</a></Link>
        <Link href={ROUTES.posts}><a>Posts</a></Link>
        <Link href={ROUTES.newPost}><a>Add new post</a></Link>

        </nav>
        <main>
            {children}
        </main>
        </>
    )
}