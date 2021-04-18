import Head from 'next/head'
import MainLayout from '../../components/MainLayout'



export default function New() {
    return (
        <MainLayout>
            <Head>
                <title>New post</title>
            </Head>

            <div>New post</div>
        </MainLayout>
    )
}