import remark from 'remark'
import breaks from 'remark-breaks'
import hljs from 'remark-highlight.js'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(breaks).use(hljs).use(html).process(markdown)
  return result.toString()
}
