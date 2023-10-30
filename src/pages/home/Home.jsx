import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
function Home() {
  const context= useContext (myContext)
  console.log(context)
  const {name,rollNo}= context
  return (
  <Layout>
   <h1>Name : {name}</h1>
   <h1>RollNo: {rollNo}</h1>
    
  </Layout>
  )
}

export default Home