import MoreStories from '@/components/more-stories'
import { getAllPosts } from '@/lib/api'
import Post from '@/types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
