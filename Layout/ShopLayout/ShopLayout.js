import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export function ShopLayout({ children, title = null }) {
  const baseTitle = 'WC-Shop'
  const finalTitle = title
      ? `${baseTitle} - ${title}`
      : baseTitle
  return (
      <>
        <Head>
          <title>{finalTitle}</title>
          <meta charSet="utf-8"/>
        </Head>
        <div className="wrapper">
          <Header/>
          {children}
          <Footer/>
        </div>
      </>
  )
}