import React from 'react'
import Select from 'react-select'
import { Trans, useTranslation } from 'react-i18next'

const CustomDropdown = ({
  onSelectHandler,
  customClass,
  selectValue,
  options,
}: any) => {
  const { i18n } = useTranslation()
  const DropdownIndicator = () => {
    return (
      <div className="uk-unit">
        <span className="uk-unit-text">選択</span>
      </div>
    )
  }

  return (
    <Select
      components={{ DropdownIndicator }}
      className={`${customClass ? customClass : ''} `}
      classNamePrefix="form_select_input"
      options={options}
      onChange={onSelectHandler}
      isSearchable={false}
      isClearable={false}
      value={selectValue}
      placeholder="業種"
    />
  )
}

export default CustomDropdown
