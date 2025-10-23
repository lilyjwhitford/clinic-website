import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-300 bg-gray-200 p-4 text-black">
      <h1 className="text-2xl font-bold">
        <Link href="/">PRP Medical Aesthetics</Link>
      </h1>
      <ul className="mt-2 flex space-x-4">
        <li>
          <Link href="/services">services</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">contact </Link>
        </li>
        <li>
          <Link href="/booking">book now</Link>
        </li>
      </ul>
    </nav>
  )
}
