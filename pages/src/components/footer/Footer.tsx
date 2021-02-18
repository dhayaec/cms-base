export default function Footer(): JSX.Element {
    return (
        <footer className="flex items-center justify-center">
            <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Base CMS boilerplate
            </p>
        </footer>
    )
}
