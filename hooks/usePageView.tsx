import { useEffect } from 'react'
import { useRouter } from "next/router";
import { pageview } from '../lib/gtag'

export default function usePageView() {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}