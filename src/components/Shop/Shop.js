import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb'
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';


const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useCart();
      const [page, setPage] = useState(0);
      const [pageCount, setPageCount] = useState(0);

      //Applying pagination
      const [displayProducts, setDisplayProducts] = useState([]);
      const size = 10;

      useEffect(() => {
            // console.log('product api called')
            fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
                  .then(res => res.json())
                  .then(data => {
                        setProducts(data.products);
                        //display initial product data
                        setDisplayProducts(data.products);
                        // console.log('product recieved');

                        //pagination
                        const count = data.count;
                        const pageNumber = Math.ceil(count / size);
                        setPageCount(pageNumber);
                  });
      }, [page]);

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
                              {/* pagination  */}
                              <div className="pagination">
                                    {
                                          [...Array(pageCount).keys()].map(number =>
                                                <button
                                                      className={number === page ? 'selected' : ''}
                                                      key={number}
                                                      onClick={() => setPage(number)}>{number + 1}
                                                </button>)
                                    }
                              </div>
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