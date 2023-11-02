import { useEffect, useState } from 'react'
import BasicTable from './components/BasicTable'

function App() {
  const [VAData, setVAData] = useState({})
  useEffect(() => {
    // Function to handle data received from VA
    const onDataReceived = (evt) => {
      if (evt && evt.data && evt.data?.data !== undefined) {
        const data = evt.data
        // Check if data element exists in vaData object
        if (data.data) {
          // Keep the original data
          setVAData(data)
          console.log(VAData)
        }
      }
    }
    // Listen for message coming from VA
    window.addEventListener("message", onDataReceived, false)
    return () => window.removeEventListener("message", onDataReceived)
  }, [VAData])

  return (
    <>
      { VAData && "data" in VAData &&
        <BasicTable rows={VAData.data} columns={VAData.columns}/>
      }
    </>
  )
}

export default App
