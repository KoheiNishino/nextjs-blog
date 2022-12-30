import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import DateFormatter from '@/components/date-formatter'
import PostBody from '@/components/post-body'
import PostTitle from '@/components/post-title'
import { BLOG_TITLE } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import { getPageBySlug } from '@/lib/pages'
import PostType from '@/types/post'

type Props = {
  post: PostType
}

const Policy = ({ post }: Props) => {
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
          <div className='text-secondary mb-6 text-lg'>
            <DateFormatter dateString={post.date} />
          </div>
          <PostTitle>{post.title}</PostTitle>
          <PostBody content={post.content} />
        </article>
      )}
    </>
  )
}

export default Policy

export async function getStaticProps() {
  const post = getPageBySlug('policy', [
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
