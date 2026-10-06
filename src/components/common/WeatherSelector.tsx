import React from 'react'

export type Weather = 'sunny' | 'rainy'

type Props = {
  weather: Weather
  onChange: (value: Weather) => void
}

const WeatherSelector = (props: Props) => {
  return (
    <div className="switcher-button-group">
      <div className={`slider ${props.weather}`}></div>
      <button onClick={(e) => props.onChange('sunny')}>晴れ</button>
      <button onClick={(e) => props.onChange('rainy')}>雨</button>
    </div>
  )
}

export default WeatherSelector
