import { useState,useEffect } from "react"
import Title from "./ui/Title"
import Products from "api/products.json"
import Productitem from "components/ui/Productitem"


export default function Favorites() {

  const [products , setProducts] = useState([]);

  useEffect (() => {
    setProducts(Products);
  },[])


    return (
      <div className="container mx-auto">
        <Title>Favoritler</Title>
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-8 md:grid-cols-6 gap-0.1 bg-white rounded-lg owerflow-hidden">
          {products.length && products.map(product => <Productitem key={product.id} product = {product} />)}
        </div>
      </div>
    )
  }