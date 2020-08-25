import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'

export function MainLayout({ children, title = null }) {
  const baseTitle = 'ООО Уралэлектроремонт'
  const finalTitle = title
      ? `${baseTitle} - ${title}`
      : baseTitle
  return (
      <>
        <Head>
          <title>{finalTitle}</title>
          <meta name="description" content="ООО Уралэлектроремонт - ремонт электродвигателей Пермь"/>
          <meta name="keywords"
                content="ремонт электродвигателей в Перми постоянного асинхронного тока перемотка Пермь обмотка трансформатор бензо генератор электромотор насос электрокатушка сварочники авто электрооборудования"/>
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