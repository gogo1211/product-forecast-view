import { FC, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { PulseLoader } from 'react-spinners'

const StyledButton = styled.button<{ fullWidth?: boolean; size?: 'sm' | 'md' | 'lg' }>`
  ${tw`bg-primary-500 text-white rounded-lg text-2xl cursor-pointer uppercase tracking-wide hover:bg-primary-600 disabled:bg-primary-400`}

  ${({ fullWidth }) => (fullWidth ? tw`w-full` : 'min-width: 10rem;')}

  :focus,
  :active {
    ${tw`outline-none ring ring-primary-300`}
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return tw`px-4 py-2 text-xl`
      case 'lg':
        return tw`px-8 py-6 text-4xl`
      case 'md':
      default:
        return tw`px-6 py-4 text-2xl`
    }
  }}
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonProps> = ({ loading, children, ...remainingProps }) => {
  return (
    <StyledButton {...remainingProps} disabled={loading}>
      {loading ? <PulseLoader color="#000" size="8" margin="2" /> : children}
    </StyledButton>
  )
}

export { Button }
