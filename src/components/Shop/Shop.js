import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css';

const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      const [displayProducts, setDisplayProducts] = useState([]);

      useEffect( () => {
            // console.log('product api called')
            fetch('./products.JSON')
            .then(res => res.json())
            .then(data =>{ 
                  setProducts(data);
                  
                  //display initial product data
                  setDisplayProducts(data);
            // console.log('product recieved');

            });
      }, []);

      useEffect(()=>{
            // console.log('local storage called');
            const savedCart = getStoredCart();
            const storedCart = [];
            // console.log(savedCart);
           if(products.length){
            for (const key in savedCart){
                  // console.log(key);
                  // console.log(products);
                  // console.log(savedCart[key]);
                  const addedProduct = products.find( product => product.key === key);
                  if(addedProduct){
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

      const handleAddToCart =(product) =>{
            // console.log(product);
      
            const newCart = [...cart, product]; //spread operation
            setCart(newCart);
            //save to local storage

            addToDb(product.key);

      }
      //search product
      const handleSearch = event =>{
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
                        onChange={ handleSearch }
                        placeholder="Search Products"/>
                  </div>

                  <div className="shop__container">
                        <div className="product__container">
                              {
                              displayProducts.map(product => <Product 
                              key = {product.key}
                              product = {product}
                              handleAddToCart = {handleAddToCart}
                              >
                              </Product>)
                        }
                  </div>
                        <div className="cart__container">
                               <Cart cart={cart}></Cart>
                        </div>
                  </div>
            </>
      );
};

export default Shop;