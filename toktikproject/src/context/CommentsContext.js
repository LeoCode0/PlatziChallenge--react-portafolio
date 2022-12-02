import { createContext, useState } from "react";

export const CommentsContext = createContext({})

export const CommentsContextProvider = ({ children }) => {
  const [currentCommentsState, toggleComments] = useState(false)

  return(
    <CommentsContext.Provider value={{currentCommentsState, toggleComments}} >
      {children}
    </CommentsContext.Provider>
  )
}
