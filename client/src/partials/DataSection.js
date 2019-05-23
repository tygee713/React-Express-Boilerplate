import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

export default function DataSection() {
  const [data, setData] = useState(0)

  useEffect(async () => {
    const response = await axios.get('/sample/get')

    setData(response.data)
  })

  return (
    <div>
      <p>Response: { data.toJSON }</p>
    </div>
  )
}
