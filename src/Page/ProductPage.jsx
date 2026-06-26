import React from "react";

function Products() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-slate-600">Loading Products ...</p>;
  if (error) return <p className="text-rose-600"> {error}</p>;
  return <div className=""></div>;
}

export default Products;
