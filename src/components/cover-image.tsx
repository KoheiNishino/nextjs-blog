import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout='fill'
      objectFit='contain'
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return <>
    {slug ? (
      <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
        {image}
      </Link>
    ) : (
      image
    )}
  </>;
}

export default CoverImage
