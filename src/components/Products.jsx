import { useProductsQuery } from '../redux/api';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Search from './Search';

function Products() {

  const { data, error, isLoading } = useProductsQuery();
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }
  
  return (
    <div>
      <div className="searchbar">
        <Search data={data} setFilteredProducts={setFilteredProducts}/>
      </div>
      <div className="products">
        {
          data.length ?
          (filteredProducts.length) ?
          filteredProducts.map((product, id) => {
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
          }) :
          <p>Loading Products...</p>
        }
      </div>
    </div>
  );
}

export default Products;