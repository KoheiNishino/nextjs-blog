import { AppProps } from 'next/app'

import GoogleAnalytics from '@/components/google-analytics'
import Layout from '@/components/layout'
import usePageView from '@/hooks/usePageView'
import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()

  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
