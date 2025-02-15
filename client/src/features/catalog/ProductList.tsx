import { Box } from "@mui/material";
import { product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
    products: product[];
}
export default function ProductList({products}:Props) {
  return (
    <Box sx={{display: 'flex',flexWrap: 'wrap',gap:3, justifyContent: 'center'}}>
        {
          products.map(product => (
            <ProductCard key={product.name} product={product}/>
          ))}
      </Box>
  )
}