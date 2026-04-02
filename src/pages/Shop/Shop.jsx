import React from 'react'
import './Shop.css'

const products = [
  {
    id: 1,
    title: "Nike Air Force",
    price: 120,
    img: "https://picsum.photos/300?1"
  },
  {
    id: 2,
    title: "Adidas Sneakers",
    price: 95,
    img: "https://picsum.photos/300?2"
  },
  {
    id: 3,
    title: "Puma Shoes",
    price: 80,
    img: "https://picsum.photos/300?3"
  },
  {
    id: 4,
    title: "Reebok Classic",
    price: 110,
    img: "https://picsum.photos/300?4"
  }
]

function Shop() {
  return (
    <div className="shop">
      <h1 className="shop-title">Our Shop</h1>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop