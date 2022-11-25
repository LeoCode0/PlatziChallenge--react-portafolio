import { createContext } from "react";
import { getFromLocalStorage } from "../utilities/getFromLocalStorage";

export const TwContext = createContext({})

export const TweetsContext = ({ children }) => {
  const tweets = getFromLocalStorage("my-tweets")

  return(
    <TwContext.Provider value={tweets}>
      { children }
    </TwContext.Provider>
  )
}
