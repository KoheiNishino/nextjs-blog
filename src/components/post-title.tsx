import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => (
  <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left'>
    {children}
  </h1>
)

export default PostTitle
