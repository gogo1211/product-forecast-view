import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Routes } from 'routes'
import { useScrollToTop } from 'hooks/useScrollToTop'

const App: FC<{}> = () => {
  useScrollToTop()

  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  )
}

export { App }
