import React, { ReactNode } from 'react'

const CustomInputV2: React.FC<CustomInputV2Props> = ({
  label,
  onChange,
  value,
  type = 'text',
  inputClasses = '',
  inputProps = {},
  placeholder = '',
  formClasses = 'mt-20',
  endIcon,
}): JSX.Element => {
  return (
    <div className="uk-width-1-1">
      {label ? <span className="uk-text-normal font-16">{label}</span> : null}
      <div className={`form-control ${formClasses}`}>
        <input
          type={type}
          className={`uk-input ${inputClasses}`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value)
          }}
          placeholder={placeholder}
          {...inputProps}
        />
        {endIcon ? (
          <span className="input-end-icon cursor-pointer">{endIcon}</span>
        ) : null}
      </div>
    </div>
  )
}

type InputType = 'number' | 'text'

interface InputProps {
  [key: string]: any
}

type CustomInputV2Props = {
  label?: string
  value: number | string
  onChange: (value: number | string) => void
  type?: InputType
  inputClasses?: string
  inputProps?: InputProps
  placeholder?: string
  formClasses?: string
  endIcon?: string | Element | undefined | ReactNode
}

export default CustomInputV2
