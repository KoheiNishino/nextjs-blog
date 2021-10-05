import Meta from './meta'
import Container from './container'
import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </div>
    </>
  )
}

export default Layout
