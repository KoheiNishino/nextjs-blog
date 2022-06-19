import CoverImage from './cover-image'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
        <div className="text-secondary mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
    </>
  )
}

export default PostHeader
