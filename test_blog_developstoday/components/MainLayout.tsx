import Head from 'next/head';
import Link from 'next/link'
import { ROUTES } from '../constants/routes';
import styled from 'styled-components';

export default function MainLayout({ children, page }) {
    
    <Head>
        <title> {page} | My test app </title>
        <meta name="keywords" content="react.js, next.js, js, javasctipt, typesctipt, blog, test, DevelopsToday" />
        <meta name="description" content="This is my test app (blog) for DevelopsToday" />
        <meta name="autor" content="Yushchenko Yulia" />
        <meta charSet="utf-8" />
    </Head>


    const Nav = styled.a`
    position: fixed;
    height: 60px;
    left: 0;
    top: 0;
    right: 0;
    background: darkblue;
    display: flex;
    justify-content: space-around;
    align-items: center
    `
    const A = styled.a`
    color: #fff;
    text-decoration: none;
    size: 20px;
    `
    const Main = styled.main`
    margin-top: 60px;
    padding: 1rem;
    `

    return (
        <>
            <Nav>
                <Link href={ROUTES.home}><A>Home</A></Link>
                <Link href={ROUTES.posts}><A>Posts</A></Link>
                <Link href={ROUTES.newPost}><A>Add new post</A></Link>

            </Nav>
            <Main>
                {children}
            </Main>
        </>
    )
}