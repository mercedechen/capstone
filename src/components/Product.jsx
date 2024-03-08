import { useProductQuery } from '../redux/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart';

function Product() {
  
  let { id } = useParams();

  const dispatch = useDispatch();

  const { data, error, isLoading } = useProductQuery(id);

  if (isLoading) {
    return <p>Loading Product...</p>
  }

  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }

  return (
    <div className="productView">
      <img src ={data.image}/> 
      <div className="productDetails">
        <h2>{data.title}</h2>

        <div className="subDetails">
          <h3>Category: {data.category}</h3>
          <h3>Count: {data.rating.count}</h3>
          <h3>Rating: {data.rating.rate}</h3>
        </div>

        <div className="details">
          <h3>Description:</h3>
          <p>{data.description}</p>
        </div>

        <div className="details">
          <h3>Price:</h3>
          <p>${data.price}</p>
        </div>

        <button onClick={() => dispatch(addProduct(data))}>
          Add to Cart
        </button>

        <Link to="/" className="return">Go Back</Link>
      </div>
    </div>
  )
}

export default Product;