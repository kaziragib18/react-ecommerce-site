import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css';
import { Link } from 'react-router-dom';


const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      const [displayProducts, setDisplayProducts] = useState([]);

      useEffect(() => {
            // console.log('product api called')
            fetch('./products.json')
                  .then(res => res.json())
                  .then(data => {
                        setProducts(data);

                        //display initial product data
                        setDisplayProducts(data);
                        // console.log('product recieved');

                  });
      }, []);

      useEffect(() => {
            // console.log('local storage called');
            // console.log(savedCart);
            if (products.length) {
                  const savedCart = getStoredCart();
                  const storedCart = [];
                  for (const key in savedCart) {
                        // console.log(key);
                        // console.log(products);
                        // console.log(savedCart[key]);
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                              const quantity = savedCart[key];
                              addedProduct.quantity = quantity;
                              // console.log(addedProduct);
                              storedCart.push(addedProduct);

                        }
                        // console.log(key, addedProduct);
                  }
                  setCart(storedCart);
            }
      }, [products])

      const handleAddToCart = (product) => {
            const exists = cart.find(pd => pd.key === product.key);
            let newCart = [];
            if (exists) {
                  const rest = cart.filter(pd => pd.key !== product.key);
                  exists.quantity = exists.quantity + 1;
                  newCart = [...rest, product];
            } else {
                  product.quantity = 1;
                  newCart = [...cart, product];
            }
            console.log(newCart);

            setCart(newCart);
            //save to local storage
            addToDb(product.key);

      }
      //search product
      const handleSearch = event => {
            const searchText = event.target.value;
            //filter out products by given search text
            const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

            setDisplayProducts(matchedProducts);
            // console.log(matchedProducts.length);
      }

      return (
            //using empty tag / fragment alt to div
            <>
                  <div className="search__container">
                        <input
                              type="text"
                              onChange={handleSearch}
                              placeholder="Search Products" />
                  </div>

                  <div className="shop__container">
                        <div className="product__container">
                              {
                                    displayProducts.map(product => <Product
                                          key={product.key}
                                          product={product}
                                          handleAddToCart={handleAddToCart}
                                    >
                                    </Product>)
                              }
                        </div>
                        <div className="cart__container">
                              <Cart cart={cart}>
                                    <Link to="/review">
                                          <button className="cart__button">Review Order</button>
                                    </Link>
                              </Cart>
                        </div>
                  </div>
            </>
      );
};

export default Shop;