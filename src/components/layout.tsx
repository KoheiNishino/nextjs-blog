import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Meta from '@/components/meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
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

export default Layout
