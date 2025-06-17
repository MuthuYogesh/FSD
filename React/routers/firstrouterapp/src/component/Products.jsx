import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Products() {
    let productList=[
        {name:"Rich dad and poor dad",price:100,category:'book'},
        {name:"atomic habit",price:200, category:'book'},
        {name:"Pshychology of Money", price:150, category:'book'},
        {name:"Samsung",price:10000, category:'mobile'},
        {name:"Redmi",price:8000,category:'mobile'},
        {name:"iphone",price:12000,category:'mobile'},
        {category:'laptop'},
        {category:'smartwatch'},
    ]
    let {product} = useParams();
    const [products, setProducts] = useState(productList);
    const [queryParam, setQueryParam] = useSearchParams();

    useEffect(()=>{
      product&&setProducts((prodList)=>prodList.filter(prod=>prod.category===product));
    },[product])
    // console.log(product)
    let productCheck = "products"

    const handleFilterSubmit = (val)=>{
      setQueryParam({price:val});
    }

    useEffect(()=>{
      let price = parseInt(queryParam.get('price'))||0;
      setProducts((prodList)=>prodList.filter(prod=>prod.price>price));
    }, [queryParam])

    const handleReset = ()=>{
      setQueryParam({});
      product="";
      setProducts(productList);
    }

  return (
    <>
      <Navbar/>
      <div>
        <h1>All the {product || productCheck}</h1>
        <button onClick={()=>handleFilterSubmit(50)}>50</button>
        <button onClick={()=>handleFilterSubmit(100)}>100</button>
        <button onClick={()=>handleFilterSubmit(200)}>200</button>
        <button onClick={handleReset}>Reset</button>
        <ul>
          {products.map((obj, idx)=>{
              return(
                <li key={idx}>{obj.name} : {obj.price}</li>
              )
          })}
        </ul>
      </div>
    </>
  )
}
