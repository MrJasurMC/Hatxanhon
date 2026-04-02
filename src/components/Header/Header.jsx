import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <h1><a href="/">ShopHub</a></h1>
        </div>
        <nav className='nav-menu'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className='header-actions'>
          <input type="search" placeholder="Search products..." className='search-bar' />
          <button className='cart-btn'>Cart (0)</button>
        </div>
      </div>
    </header>
  )
}

export default Header