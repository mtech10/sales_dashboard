import { Star } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article className="flex min-h-96 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:translate-y-1 hover:shadow-md">
      <div className="flex rounded-xl h-52   justify-center p-4 cursor-pointer bg-slate-50 ">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <span className="w-fit rounded-full text-indigo-50 px-3 py-1 text-xs font-medium capitalize bg-indigo-700">
          {product.category}
        </span>
        <h3 className="mt-3 min-h-14 text-lg font-semibold leading-7  text-slate-900 overflow-hidden">
          {product.title}
        </h3>
        <p className="mt-2 h-12 overflow-hidden text-sm leading-6 text-slate-500 ">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Price
            </p>
            <p className="text-xl font-semibold text-slate-900">
              ${product.price}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-semibold text-slate-700">
                {product.rating?.rate ?? "N/A"}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {product.rating?.count ?? 0} reviews
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
