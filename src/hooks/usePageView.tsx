import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { GA_TRACKING_ID, pageview } from '../lib/gtag'

export default function usePageView() {
  const router = useRouter()

  useEffect(() => {
    if (!GA_TRACKING_ID) return

    const handleRouteChange = (path: string) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // eslint-disable-next-line consistent-return
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
