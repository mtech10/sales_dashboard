import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../component/ProductCard";

function Products() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-slate-600">Loading Products ...</p>;
  if (error) return <p className="text-rose-600"> {error.message}</p>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
