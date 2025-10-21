import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let apiData = createContext()
const ContextApi = ({children}) => {
  // let [per, setPer] = useState({banners: [], products: [] })
  // let getPer = ()=>{
  //   axios.get("/data/products.json").then((res)=>{
  //     console.log(res.data)
  //   })
  // }

  let [info, setInfo] = useState([])
  let getData = ()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      setInfo(response.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <apiData.Provider value={info}>{children}</apiData.Provider>
    </div>
  )
}

export {ContextApi, apiData}