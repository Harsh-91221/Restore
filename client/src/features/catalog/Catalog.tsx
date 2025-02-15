import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { product } from "../../app/models/product";
export default function Catalog() {
  const [products, setproducts] = useState<product[]>([]);
    useEffect(() => {
      fetch('https://localhost:5001/api/products')
        .then(response => response.json())
        .then(data => setproducts(data))
    }, [])
  return (
    <>
    <ProductList products={products} />
    </>
  )
}