import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="h-32 w-full object-contain"
      />
      <h3 className="mt-3 text-sm font-medium text-slate-600 truncate">
        {product.title}
      </h3>
      <p className="mt-1 text-sm text-slate-900">${product.price}</p>
    </div>
  );
};

export default ProductCard;
