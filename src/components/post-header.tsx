import CoverImage from '@/components/cover-image'
import DateFormatter from '@/components/date-formatter'
import PostTitle from '@/components/post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => (
  <>
    <div className="text-secondary mb-6 text-lg">
      <DateFormatter dateString={date} />
    </div>
    <PostTitle>{title}</PostTitle>
    <div className="mb-7 md:mb-14 sm:mx-0 w-full h-48 md:h-96 relative">
      <CoverImage title={title} src={coverImage} />
    </div>
  </>
)

export default PostHeader
