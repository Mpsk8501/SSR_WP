import { useState } from 'react'
import { MainLayout } from '../../Layout/MainLayout'
import Auth from '../../components/authComponent'
import RegisterForm from '../../components/authComponent/registrationForm'


export default function Contacts() {
  const [isRegister, setIsRegister] = useState(false)

  return (
      <MainLayout title={'Auth'}>
        <div className={'flexWrapper'}>
          <div className="container">
            {
              !isRegister
                ?<div onClick={()=>setIsRegister(true)} className="btn">
                    Authorization
                  </div>
                :<div onClick={()=>setIsRegister(false)} className="btn">
                    Registration
                  </div>

            }
          </div>
          {
            !isRegister
              ?<RegisterForm/>
              :<Auth/>
          }

        </div>
      </MainLayout>
  )
}

