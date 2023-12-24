'use client'

import { createContext, ReactNode, useContext, useState } from 'react'
import { CookieValueTypes, getCookie } from 'cookies-next'

export const AuthContext = createContext<any>({
  isAuthenticated: () => false,
  user: null,
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  const isAuthenticated = (): boolean => {
    const token: CookieValueTypes = getCookie('crumb')
    return !!token
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
