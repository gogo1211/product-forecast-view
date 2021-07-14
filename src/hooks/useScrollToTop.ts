import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  const [rendered, setRendered] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!rendered) {
      window.scrollTo(0, 0)
    } else {
      setRendered(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
}

export { useScrollToTop }
