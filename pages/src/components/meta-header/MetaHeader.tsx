import Head from 'next/head'

interface MetaHeaderProps {
    title: string
}

export default function MetaHeader({
    title = 'CMS BASE',
}: MetaHeaderProps): JSX.Element {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href=" /favicon.ico" />
        </Head>
    )
}
