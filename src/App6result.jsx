import React from 'react'
import { useParams } from 'react-router-dom'
import data from './Data';

const App6result = () => {
    const { cardtitle } = useParams();
    const result = data?.filter((one) => one.title == cardtitle)
    console.log("🚀 ~ file: App6result.jsx:9 ~ App6result ~ result:", result)
    return (
    <>
    <h1>{result[0].title}</h1>
    <h1>{result[0].author}</h1>
    </>
  )
}

export default App6result