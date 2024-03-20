// react
import { useProductsQuery } from "../redux/api";
import { useState } from 'react'
import { Link } from 'react-router-dom';

// componenets
import Sort from "./Sort";

function FilterByElectronics(){
  const { data, error, isLoading } = useProductsQuery();
  const [ sortProducts, setSortProducts ] = useState([]);

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if(error){
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }

  return (
    <div>
      <div>
        <Sort data={data} setSortProducts={setSortProducts}/>
      </div>
      <div className="products">
        {
          sortProducts.length?
          sortProducts.map((product) => {
            if(product.category === `electronics`){
              return (
                <div className="product" key={product.id}>
                  <Link to={`/${product.id}`}>
                    <img src={product.image} alt={product.title}/>
                    <h2>{product.title}</h2>
                  </Link>
                </div>
              )
            }
          })
         :
          data?.map((product) => {
            if(product.category === `electronics`){
              return (
                <div className="product" key={product.id}>
                  <Link to={`/${product.id}`}>
                    <img src={product.image} alt={product.title}/>
                    <h2>{product.title}</h2>
                  </Link>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default FilterByElectronics;