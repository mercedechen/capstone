// react
import { useProductsQuery } from '../redux/api';
import { useState } from 'react'
import { Link } from 'react-router-dom';

// components
import Search from './Search';
import Categories from './Categories';

function Products() {

  const { data, error, isLoading } = useProductsQuery();

  // Functionality comes from Search component.
  const [ searchedProducts, setSearchedProducts ] = useState([]);

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }
  
  return (
    <div>
      <div className="options">
        <Categories data={data}/>
        <Search data={data} setSearchedProducts={setSearchedProducts}/>
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
            }) :
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
  );
}

export default Products;