import React from 'react'
import { useState } from 'react'
import { commonUtils } from '../../utils/commonUtils'

type InputType = 'number' | 'text'

type Props = {
  label: string
  unitLabel: string
  value: number
  onChange: (value: number) => void
}

const format = (inputType: InputType, value: number) => {
  switch (inputType) {
    case 'number':
      return value.toString()
    case 'text':
      return new Intl.NumberFormat('ja-JP').format(value)
  }
}

const CustomInput = (props: Props) => {
  const [inputType, setInputType] = useState<InputType>('text')
  return (
    <div>
      <h6 className="uk-text-normal font-16 mb-12">{props.label}</h6>
      <div className="form-control uk-margin-remove-top">
        <input
          type={inputType}
          className="uk-input"
          value={format(inputType, props.value)}
          onChange={(e: any) => {
            props.onChange(e)
          }}
          onKeyDown={commonUtils.validateInputSpecialChat}
          onFocus={() => setInputType('number')}
          onBlur={() => setInputType('text')}
        />
        <div className="uk-unit">
          <span className="uk-unit-text">{props.unitLabel}</span>
        </div>
      </div>
    </div>
  )
}

export default CustomInput
