import styled from 'styled-components'
import tw from 'twin.macro'

export interface ControlProps {
  fullWidth?: boolean
  error?: boolean
  narrow?: boolean
}

export const StyledInput = styled.input<ControlProps>`
  ${tw`border border-gray-300 bg-white text-2xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500`}
  ${({ fullWidth }) => (fullWidth ? tw`w-full` : tw`w-64 lg:w-72 max-w-lg `)}
  ${({ error }) => error && tw`border-red-500`}
  ${({ narrow }) => (narrow ? tw`px-3.5 py-2.5` : tw`px-6 py-5`)}
  overflow: hidden !important;
`

export const StyledSelect = styled.select<ControlProps>`
  ${tw`border border-gray-300 bg-white text-2xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 cursor-pointer truncate`}
  ${({ fullWidth }) => (fullWidth ? tw`w-full` : tw`w-64 lg:w-72 max-w-lg `)}
  ${({ error }) => error && tw`border-red-500`}
  ${({ narrow }) => (narrow ? tw`pl-3.5 pr-5 py-2.5` : tw`pl-6 pr-12 py-5`)}
`
