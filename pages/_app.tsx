import { AppProps } from 'next/app'
import Layout from '../components/layout'
import usePageView from '../hooks/usePageView'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
