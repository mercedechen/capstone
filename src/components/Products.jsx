// react
import { useProductsQuery } from '../redux/api';
import { useState } from 'react'
import { Link } from 'react-router-dom';

// components
import Search from './Search';
import Filter from './Filter';
import Sort from './Sort';

function Products() {

  const { data, error, isLoading } = useProductsQuery();

  // Functionality comes from <Search/>
  const [ searchedProducts, setSearchedProducts ] = useState([]);

  // Functionality comes from <Filter/>
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  // Functionality comes from <Sort/>
  const [ sortProducts, setSortProducts ] = useState([]);

  // Boolean - if waiting for fetch request to retrieve list of products from database, display "Loading Products" text
  if (isLoading) {
    return <p>Loading Products...</p>
  }

  // If there is an issue making a fetch request for list of products, display error message to the user
  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }
  
  return (
    <div>
      <div>
        <div className="options">
          <Filter data={data} setFilteredProducts={setFilteredProducts}/>
          <Search data={data} setSearchedProducts={setSearchedProducts}/>
        </div>
        <Sort data={data} setSortProducts={setSortProducts}/>
      </div>

      <div className="products">
        {
          data.length?
          searchedProducts.length ?
          searchedProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.image} alt={product.title}/>
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          }) 
          :
          filteredProducts.length?
          filteredProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.image} alt={product.title}/>
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          })
          :
          sortProducts.length?
          sortProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.image} alt={product.title}/>
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          })
          :
          data?.map((product) => {
            return (
              <div className="product" key={product.id}>
                <Link to={`/${product.id}`}>
                  <img src={product.image} alt={product.title}/>
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          }) : <p>Loading Products...</p>
        }
      </div>
    </div>
  )
}

export default Products;