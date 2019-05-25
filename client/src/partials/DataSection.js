import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

export default function DataSection() {
  const [data, setData] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/sample/get')

      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <p>Response:</p>
      { JSON.stringify(data) }
    </div>
  )
}
