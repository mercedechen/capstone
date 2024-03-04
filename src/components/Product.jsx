import { useProductQuery } from '../redux/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart'

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
    <div>
      <img src ={data.image}/>
      <h2>{data.title}</h2>
      <h3>Category: {data.category}</h3>
      <h3>Count: {data.rating.count}</h3>
      <h3>Rating: {data.rating.rate}</h3>
      <h3>{data.description}</h3>
      <h3>Price: {data.price}</h3>
      <h3><button onClick={() => dispatch(addProduct(data))}>Add to Cart</button></h3>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Product;