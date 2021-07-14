import { FC } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContentDiv = styled.div`
  ${tw`mx-auto p-5 md:py-10 max-w-screen-lg bg-white`}
`

const MainLayout: FC<{}> = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>
}

export { MainLayout }
