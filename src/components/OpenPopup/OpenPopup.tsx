import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import tw from 'twin.macro'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { StyledInput } from 'components/Common'
import { Button } from 'components/Button'

const Div = styled.div`
  ${tw`text-center`}
`

const TitleH1 = styled.h1`
  ${tw`mb-10 text-3xl text-gray-600 font-medium`}
`

const Form = styled.form`
  ${tw`max-w-lg m-auto space-y-6`}
`

const FieldErrorP = styled.p`
  ${tw`ml-2 mt-1 text-lg text-red-500 text-left`}
`

interface OpenPopupProps {
  onSubmit: (email: string) => void
}

const OpenPopup: FC<OpenPopupProps> = ({ onSubmit, ...props }) => {
  const schema = yup.object().shape({
    email: yup.string().required('Email is required.').email('Invalid email.')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur', resolver: yupResolver(schema) })

  return (
    <Div {...props}>
      <TitleH1>Complete the field below to open your value analysis.</TitleH1>
      <Form onSubmit={handleSubmit((data) => onSubmit(data.email))} noValidate autoComplete="off">
        <div>
          <StyledInput type="email" {...register('email')} placeholder="Business Email" fullWidth />
          {errors.email ? <FieldErrorP>{errors.email?.message}</FieldErrorP> : null}
        </div>
        <Button type="submit">SUBMIT</Button>
      </Form>
    </Div>
  )
}

export { OpenPopup }
