export const getStorage = (key: string): any => {
  const valueStr = window.localStorage.getItem(key)

  if (valueStr) {
    const value = JSON.parse(valueStr)

    return value
  }
}

export const setStorage = <T = any>(key: string, value: T): void => {
  const valueStr = JSON.stringify(value)
  return window.localStorage.setItem(key, valueStr)
}

export const removeStorage = (key: string): void => {
  return window.localStorage.removeItem(key)
}

export const clearStorage = (): void => {
  return window.localStorage.clear()
}
