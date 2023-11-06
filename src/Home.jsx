import React from 'react'
import Card from './Card'
import data from './Data'

const Home = () => {
  return (
    <>
    {data?.map((val,ind)=>{
        return <Card title={val.title} author={val.author} ind_={ind}/>
    })}
    </>
  )
}

export default Home