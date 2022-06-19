export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
}

export type Event = ClickEvent

export const event = ({action, category, label}: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  })
}

export const pageview = (path: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}
