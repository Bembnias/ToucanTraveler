import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/')
        setData(response.data.tekst)
      } catch (err) {
        console.log('Error fetching data')
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <h1>ToucanTraveler Project Init</h1>
        <p>{data.length ? data : 'Ładowanie...'}</p>
      </div>
    </>
  )
}

export default App
