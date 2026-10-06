import React, { VFC, useMemo, useState } from 'react'
import { createThemeContext } from './createThemeContext'

enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeType = {
  bgColor: {
    main: string
  }
  bgGradient: {
    main: string
    main2: string
    mainWithShadow: string
    green: string
    greenWithShadow: string
  }
  color: {
    main: string
    main4: string
    main3: string
    main2: string
    light: string
    light2: string
  }
  arrow: {
    left: string
  }
}

type themeContextPropType = {
  mode: Mode
  handleThemeChange: (type: string) => void
  theme: ThemeType
}

const [
  useTheme,
  ThemeContextProvider,
] = createThemeContext<themeContextPropType>()

export { useTheme }

const getTheme = (mode: Mode): ThemeType => {
  const isDark = mode === Mode.DARK
  return {
    bgColor: {
      main: isDark ? 'black-bg' : 'white-bg',
    },
    bgGradient: {
      main: isDark ? 'gray-gradient-bg-2' : 'white-bg',
      main2: isDark ? 'bg-gray-gradient-3' : 'white-bg-2',
      mainWithShadow: isDark ? 'gray-gradient-bg-2' : 'white-bg light-shadow',
      green: isDark ? 'bg-green-gradient' : 'white-bg',
      greenWithShadow: isDark
        ? 'bg-green-gradient'
        : 'bg-green-gradient-light light-shadow',
    },
    color: {
      main: isDark ? 'color-white' : 'color-black-1',
      main2: isDark ? 'color-white' : 'color-black-3',
      main3: isDark ? 'color-white' : 'color-black-4',
      main4: isDark ? 'color-gray-75' : 'color-black-1',
      light: isDark ? 'color-white' : 'color-black-light-1',
      light2: isDark ? 'color-grey-light-45' : 'color-black-light-1',
    },
    arrow: {
      left: isDark ? 'tooltip-arrow-left' : 'tooltip-arrow-left-light',
    },
  }
}

export const ThemeProvider: VFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState(Mode.DARK)
  const theme: ThemeType = useMemo(() => {
    return getTheme(mode)
  }, [mode])
  const handleThemeChange = (mode: string) => setMode(mode as Mode)
  return (
    <ThemeContextProvider value={{ mode, theme, handleThemeChange }}>
      {children}
    </ThemeContextProvider>
  )
}
