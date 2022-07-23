import PostPreview from '@/components/post-preview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => (
  <section>
    <div className="mb-16">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </div>
  </section>
)

export default MoreStories
