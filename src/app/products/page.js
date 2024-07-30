import React from "react";
import PriceButton from "./PriceButton";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

async function page() {
  // let products = await productList();

  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  let products = data.products;

  return (
    <div>
      <ul>
        {products.map((data, i) => (
          <li key={i}>
            Name: {data.title} Category: {data.category}
            &nbsp; &nbsp;<PriceButton price={data.price}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
