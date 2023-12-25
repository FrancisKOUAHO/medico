'use client'

import Button from '@/components/atoms/button/button'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

const Home = () => {
  const router: AppRouterInstance = useRouter()

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="c-login">
      <div>
        {/* <img src="/images/" alt="logo" /> */}
        <h4>Bienvenue !</h4>
        <p>Connectez-vous pour accéder à votre compte.</p>

        <form onSubmit={handlerSubmit}>
          <div className="c-input">
            <span className="c-input__subtitle">Email address</span>
            <input
              className="c-input__subtitle__input"
              type="email"
              placeholder="example@example.com"
              name="email"
              required
            />
          </div>

          <Button label="Se connecter" type="submit" size="large" />

          <hr />

          <Button
            label="Se connecter avec google"
            size="large"
            icon={<img src="/images/icons/google.svg" alt="" width={20} />}
          />
        </form>
      </div>
    </div>
  )
}

export default Home
