import Footer from '../src/components/footer/Footer'
import Menu from '../src/components/header/Header'
import MetaHeader from '../src/components/meta-header/MetaHeader'

export default function About(): JSX.Element {
    return (
        <div className="flex flex-col justify-center min-h-screen py-2">
            <MetaHeader title="About" />
            <Menu />
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <p>About</p>
            </main>
            <Footer />
        </div>
    )
}
