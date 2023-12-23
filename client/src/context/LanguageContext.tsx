'use client'

import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import getUserLocale from 'get-user-locale'

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({
  children,
}) => {
  const userLocale = getUserLocale().toLowerCase().substring(0, 2)

  const [language, setLanguage] = useState<any>(userLocale)

  useEffect(() => {
    setLanguage(userLocale)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
