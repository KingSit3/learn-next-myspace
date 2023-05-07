import Image from "next/image"
import Link from "next/link"

export default () => {
  return (
    <nav className="flex justify-between items-center p-2 px-10">
      <div className="">
        <Link href={'/'}>
          <Image
            src={'/logo.png'}
            width={200}
            height={100}
            alt="Some Logo"
          />
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blogs'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}