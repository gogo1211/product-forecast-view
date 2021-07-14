import { FC } from 'react'
import { HashLoader } from 'react-spinners'
import styled from 'styled-components'
import tw from 'twin.macro'

const Div = styled.div<{ hasBackdrop?: boolean }>`
  ${tw`fixed inset-0 flex justify-center items-center`}
  ${({ hasBackdrop }) => hasBackdrop && tw`bg-black bg-opacity-20`}
`

interface LoaderProps {
  loading: boolean
  hasBackdrop?: boolean
  color?: string
}

const Loader: FC<LoaderProps> = ({ loading, hasBackdrop, color = '#6BCABA', ...props }) =>
  loading ? (
    <Div hasBackdrop={hasBackdrop}>
      <HashLoader color={color} {...props} />
    </Div>
  ) : (
    <></>
  )

export { Loader }
