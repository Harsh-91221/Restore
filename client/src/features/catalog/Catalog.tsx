import { product } from "../../app/models/product";
import ProductList from "./ProductList";
type Props = {
  products: product[];
}
export default function Catalog({products}:Props) {
  return (
    <>
    <ProductList products={products} />
    </>
  )
}