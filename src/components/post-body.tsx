import markdownStyles from '@/components/markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div className="border-t border-solid border-opacity-10">
    <div
      className={markdownStyles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default PostBody
