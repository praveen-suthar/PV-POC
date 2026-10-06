import React from 'react'

export const createThemeContext = <ContextType,>(): [
  () => ContextType,
  React.Provider<ContextType | undefined>
] => {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  const useCtx = () => {
    const c = React.useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }

  return [useCtx, ctx.Provider]
}
