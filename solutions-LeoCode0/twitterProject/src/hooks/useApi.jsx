import { useEffect, useState } from "react"

export const useApi = (API) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(quotes => {
        setData(quotes)
        setError(false)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setData(error)
        setLoading(false)
      })
  }, [])

  return { data, error, loading }
}