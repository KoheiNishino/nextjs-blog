import Link from 'next/link'
import { BLOG_TITLE } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8 mx-auto text-center sm:text-left">
      <Link href="/">
        <a>{BLOG_TITLE}</a>
      </Link>
    </h2>
  )
}

export default Header
