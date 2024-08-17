import { useEffect } from "react";
import { useState } from "react"
import Singleproduct from "../components/Singleproduct";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  },[])

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl text-center font-semibold">Products</h2>
      {/* search */}
      <div className="join flex justify-center my-3">
        <input
          type="text"
          placeholder="search..."
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Search</button>
      </div>
      {/* search category */}
      <div>
        {/* todo */}
      </div>
      {/* all products */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {
          products.map((product)=> <Singleproduct key={product._id} product={product}></Singleproduct>)
        }

      </div>




    </div>
  )
}
