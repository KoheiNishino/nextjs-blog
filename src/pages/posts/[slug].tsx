import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import PostTitle from '@/components/post-title'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import { BLOG_TITLE } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import PostType from '@/types/post'

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className='mb-16'>
          <Head>
            <title>{`${post.title} | ${BLOG_TITLE}`}</title>
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={post.content} />
        </article>
      )}
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
