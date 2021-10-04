import { BLOG_TITLE } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t border-accent-2 py-7 text-gray-400">
      <div className="flex flex-col items-center">
        <div className="text-sm md:text-lg">
          © 2021, {BLOG_TITLE} All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
