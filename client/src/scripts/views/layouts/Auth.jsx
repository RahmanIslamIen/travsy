import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import { useEffect, useState } from 'react'

const Auth = () => {
  const [loadContext, setLoadContext] = useState(true)
  const { user } = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setLoadContext(false)
    }
  }, [user])

  useEffect(() => {
    if (!loadContext) {
      if (user.token) {
        navigate('/')
      }
    }
  }, [loadContext, user, navigate])

  return (
    <section className="container flex h-screen items-center justify-center text-primary-950 max-xl:mt-24">
      <div className="items-center justify-center space-y-4 rounded-3xl bg-white p-12 md:w-8/12 lg:w-6/12">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <Outlet context={useOutletContext()} />
      </div>
    </section>
  )
}

export default Auth
