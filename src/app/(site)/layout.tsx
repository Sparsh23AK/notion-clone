import React from 'react'
import Header from '@/src/components/landing-page/header';


const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default HomePageLayout