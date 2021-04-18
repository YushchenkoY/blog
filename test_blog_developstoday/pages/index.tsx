// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="react.js, next.js, js, javasctipt, typesctipt, blog, test, DevelopsToday" />
        <meta name="description" content="This is my test app (blog) for DevelopsToday" />
        <meta name="autor" content="Yushchenko Yulia" />
        <meta charSet="utf-8" />
      </Head>
      <div>
      {/* <div className={styles.container}> */}
        <h1>start page</h1>
        <p><Link href={'posts'}><a>Posts</a></Link></p>
        <p><Link href={'posts/new'}><a>Add new post</a></Link></p>


      </div>
    </>
  )
}
