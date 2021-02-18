import Menu from '../src/components/header/Header'

export default function NotFount(): JSX.Element {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Menu />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <p>This page is not found</p>
      </main>
    </div>
  )
}
