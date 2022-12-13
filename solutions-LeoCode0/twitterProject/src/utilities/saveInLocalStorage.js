export const saveInLocalStorage = (key, value) => {
  let valueFromLocalStorage = window.localStorage.getItem(key)

  if(valueFromLocalStorage){
    valueFromLocalStorage = JSON.parse(valueFromLocalStorage)
    if(Array.isArray(valueFromLocalStorage)){
      valueFromLocalStorage.push(value)
    }
    console.log(valueFromLocalStorage)
    window.localStorage.setItem(key, JSON.stringify(valueFromLocalStorage))
  }else{
    window.localStorage.setItem(key, JSON.stringify([value]))
  }
}