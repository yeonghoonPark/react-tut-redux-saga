import React from "react";
import styled from "styled-components";

export default function ProductCard({ products, onAddToCart, onDeleteToCart }) {
  const handleAddBtn = (e) => {
    const id = e.target.name;
    const product = products.filter((cV) => cV.id === parseInt(id));
    onAddToCart({ ...product[0] });
  };

  const handleDeleteBtn = (e) => {
    const id = e.target.name;
    onDeleteToCart(id);
  };

  return (
    <>
      {products.map(({ id, name, color, price, category, brand, photo }) => (
        <Li key={id}>
          <img src={photo} alt={`${name}`} />
          <div>
            <h2>{name}</h2>
            <p>
              Color : {color}
              <br />
              Price : {price}
              <br />
              Category : {category}
              <br />
              Brand : {brand}
            </p>
            <button name={id} onClick={handleAddBtn}>
              Add To Cart
            </button>
            <button name={id} onClick={handleDeleteBtn}>
              Delete To Cart
            </button>
          </div>
        </Li>
      ))}
    </>
  );
}

const Li = styled.li`
  width: 80%;
  min-width: 412px;
  margin: 1rem auto;
  display: flex;
  gap: 1rem;
  border: 1px solid #999999;
  border-radius: 0.25rem;
  text-align: left;
  list-style: none;

  img {
    width: 120px;
    object-fit: contain;
  }

  div {
    text-transform: capitalize;
    flex-grow: 1;
    padding: 1rem;
    h2 {
      margin: 0;
    }
    button {
      margin-right: 0.5rem;
      float: right;
    }
  }
`;
