import {React, useState, useEffect} from 'react'
import axios from "axios"
import Navbar from '../Navbar'
import Footer from  "../Footer"

import "./index.css"


function Home() {
    const[value,setValue] = useState([])
    const[sort, setSortValue] = useState("recommend")


    useEffect(() => {
        fetchData()
    },[]);

   const fetchData = async () =>{
    const responseData = await axios.get("https://fakestoreapi.com/products")
    console.log(responseData)
    setValue(responseData.data)
    
   }
    
  
   const handlerButton = (e) => {
    setSortValue(e.target.value)
   } 

  const fillterTheValue = value.sort((a,b) => {
    if(sort === "high_to_low"){
      return b.price - a.price
    }
   else {
    return a.price - b.price
   }
  })    

  return (
    <div className='app-container'>
 
       <Navbar/>
       <header>
        <h1 className='main-heading'>DISCOVER OUR PRODUCTS </h1>
        <p className='description'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
       </header>
       <main>      
       <p className='items-range'>{fillterTheValue.length}  ITEMS</p>
       <select value={sort} onChange={handlerButton} className=''>
       <option value= 'recommend'>RECOMMEND </option>
        <option value= 'high_to_low'>HIGH TO LOW</option>
        <option value='low_to_high'>LOW TO HIGH</option>

       </select>
       </main>
      <ul className='product-category-list'>
        {
            fillterTheValue.map((each) => (
                <li key={each.id} className='product'>
                  <img src={each.image} alt={each.title} className='product-image' />
                    <h1 className='product-heading'>{each.title}</h1>
                    <p className='product-price'> RS :{each.price}</p>
                    <p className='product-description'> {each.description}</p>
                </li>
            ))
        }
      </ul>
      <Footer/>
    </div>
  )
}

export default Home