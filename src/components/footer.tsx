import Link from 'next/link'

import { BLOG_RELEASE_YEAR } from '@/lib/constants'

const Footer = () => (
  <footer className="text-secondary border-t border-solid border-opacity-10">
    <div className="flex flex-col items-center">
      <div className="text-sm md:text-lg py-5">
        <Link href="/policy">
          <a className="hover:underline">Privacy Policy</a>
        </Link>
      </div>
      <div className="text-sm md:text-lg pb-5">
        © {BLOG_RELEASE_YEAR} Kohei Nishino
      </div>
    </div>
  </footer>
)

export default Footer
