import { MainLayout } from '../Layout/MainLayout'
// import { useEffect } from 'react'
export default function Index() {
/*  useEffect(() => {
    const response2 = fetch('http://wp-test/wp-json/tablepress/api/v1/table/1')
    response2.then(data => {
      data.json().then(e=>console.log(e))
    })
  }, [])*/

  return (
      <MainLayout>
        <div className={'flexWrapper'}>
          <div className="container">
            <h1>Hello Next.JS!</h1>
          </div>
        </div>
      </MainLayout>
  )
}

