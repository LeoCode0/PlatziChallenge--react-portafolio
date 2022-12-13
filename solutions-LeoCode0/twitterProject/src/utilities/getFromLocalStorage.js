export const getFromLocalStorage = (key) => {
  let value = window.localStorage.getItem(key)
  return JSON.parse(value)
}