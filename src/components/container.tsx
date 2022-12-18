import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => (
  <div className='container mx-auto max-w-3xl px-5'>{children}</div>
)

export default Container
