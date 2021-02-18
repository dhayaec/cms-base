import Link from 'next/link'
import { menuItems } from '../../constants/constants'

export default function Menu(): JSX.Element {
    return (
        <header>
            <ul className="flex flex-row">
                {menuItems.map((i) => {
                    return (
                        <li
                            key={i.id}
                            className="px-2 text-blue-500 hover:text-blue-800"
                        >
                            <Link href={i.href}>
                                <a className="cursor-pointer">{i.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
