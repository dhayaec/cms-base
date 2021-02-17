import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href=" /favicon.ico" />
    </Head>

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

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-400"
      >
        &copy; {new Date().getFullYear()} Base CMS boilerplate
      </a>
    </footer>
  </div>
)

export default Home
