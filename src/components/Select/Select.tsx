import { forwardRef, SelectHTMLAttributes } from 'react'

import { StyledSelect, ControlProps } from 'components/Common'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, ControlProps {
  placeholder: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, children, ...remainingProps }, ref) => {
    return (
      <StyledSelect ref={ref} {...remainingProps}>
        <option className="hidden" value="Choose">
          {placeholder}
        </option>
        {children}
      </StyledSelect>
    )
  }
)

export { Select }
