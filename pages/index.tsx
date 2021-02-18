import Head from 'next/head'
import Footer from './src/components/footer/Footer'
import Menu from './src/components/header/Header'

export const Home = (): JSX.Element => (
    <div className="flex flex-col justify-center min-h-screen py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href=" /favicon.ico" />
        </Head>

        <Menu />

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <h1 className="text-blue-400 text-2xl">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <div className="flex flex-col">
                <p className="text-indigo-600 py-2">
                    This is an example of base cms package
                </p>
            </div>
        </main>
        <Footer />
    </div>
)

export default Home
