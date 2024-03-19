// react
import { useProductsQuery } from "../redux/api";
import { Link } from 'react-router-dom';

function FilterByF(){
  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if(error){
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }

  return (
    <div className="products">
      {
        data?.map((product) => {
          if(product.category === `women's clothing`){
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
  )
}

export default FilterByF;