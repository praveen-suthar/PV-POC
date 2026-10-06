import React from 'react'
import Select, { DropdownIndicatorProps, components } from 'react-select'

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1028_835"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1028_835)">
          <path
            d="M12 14.6538L7.59619 10.25H16.4038L12 14.6538Z"
            fill="#F6F8F9"
            fill-opacity="0.75"
          />
        </g>
      </svg>
    </components.DropdownIndicator>
  )
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: 'transparent !important',
  }),
}
const CustomControl = ({ startIcon, ...props }: any) => {
  return (
    <components.Control {...props}>
      <div className="uk-flex uk-flex-middle uk-width-1-1">
        <span
          role="img"
          aria-label="search icon"
          style={{ marginRight: '8px' }} // Adjust spacing as needed
        >
          {startIcon}
        </span>
        {props.children}
      </div>
    </components.Control>
  )
}

const CustomDropdownV2: React.FC<CustomDropdownV2Props> = ({
  label,
  value,
  options,
  handleChange,
  startIcon = null,
  classNames = 'dropdown-width-320',
  labelBg = 'transparent',
  placeholder = '',
}): JSX.Element => {
  const customComponents: any = {}
  if (startIcon) {
    customComponents['Control'] = (props: any) => (
      <CustomControl startIcon={startIcon} {...props} />
    )
  }

  return (
    <>
      {label ? (
        <label
          className="uk-custom-label custom grey_blue_40"
          style={{ background: labelBg }}
        >
          <span>{label}</span>
        </label>
      ) : null}
      <Select
        className={`custom-dropdown ${classNames}`}
        classNamePrefix="form_select_input"
        value={value}
        name={'CONTRACT_TYPE'}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable
        isClearable={false}
        components={{ DropdownIndicator, ...customComponents }}
        options={options}
        onChange={handleChange}
      />
    </>
  )
}

type option = {
  value: string | number
  label: string
}

interface CustomDropdownV2Props {
  label: string
  value?: option
  options: option[]
  classNames?: string
  handleChange: (data: any) => void
  labelBg?: string
  startIcon?: any
  placeholder?: string
}

export default CustomDropdownV2
