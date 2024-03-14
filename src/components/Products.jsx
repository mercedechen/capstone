// react
import { useProductsQuery } from '../redux/api';
import { useState } from 'react'
import { Link } from 'react-router-dom';

// components
import Search from './Search';
import Categories from './Categories';
import Sort from './Sort';

function Products() {

  const { data, error, isLoading } = useProductsQuery();

  // Functionality comes from Search component.
  const [ searchedProducts, setSearchedProducts ] = useState([]);

  // Functionality comes from Categories component.
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  const [ sortProducts, setSortProducts ] = useState([]);

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }
  
  return (
    <div>
      <div>
        <div className="options">
          <Categories data={data} setFilteredProducts={setFilteredProducts}/>

          <Search data={data} setSearchedProducts={setSearchedProducts}/>
        </div>

        <Sort data={data} setSortProducts={setSortProducts}/>
      </div>

      <div className="products">
        {
          data.length?
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
          }) :
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