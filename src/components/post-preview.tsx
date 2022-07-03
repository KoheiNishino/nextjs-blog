import Link from 'next/link'
import DateFormatter from '@/components/date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  slug,
}: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>
        <div className="flex border-t border-solid border-opacity-10 py-4">
          <div className="flex-none">
            <img src={coverImage} alt={title} className="object-contain h-32 w-32" />
          </div>
          <div className="pl-5">
            <h3 className="text-xl md:text-3xl mb-2">{title}</h3>
            <div className="text-secondary text-sm md:text-lg mb-2">
              <DateFormatter dateString={date} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostPreview