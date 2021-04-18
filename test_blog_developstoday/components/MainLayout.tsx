import Link from 'next/link'
import { ROUTES } from '../constants/routes';
import styled from 'styled-components';

export default function MainLayout({ children }) {

    const Nav = styled.a`
    position: fixed;
    height: 60px;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    text-decoration: none;
    `
    // const Main = styled.main`
    // margin-top: 60px;
    // padding: 1rem;
    // `

    return (
        <>
            <Nav>
                <Link href={ROUTES.home}><a>Home</a></Link>
                <Link href={ROUTES.posts}><a>Posts</a></Link>
                <Link href={ROUTES.newPost}><a>Add new post</a></Link>

            </Nav>
            <main>
                {children}
            </main>
        </>
    )
}