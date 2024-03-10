import { useProductQuery } from '../redux/api';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cart';
import { useState } from 'react';

function Product(props) {
  
  let { id } = useParams();

  const dispatch = useDispatch();

  const { data, error, isLoading } = useProductQuery(id);

  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ success, setSuccess ] = useState(null);

  if (isLoading) {
    return <p>Loading Product...</p>
  };

  const handleClick = () => {
    if (!props.token){
      setErrorMsg('You must be logged in to perform this action.');
    } else {
      dispatch(addProduct(data));
      setSuccess('Item added to cart.');
    };
  };

  return (
    <div className="productView" key={data.id}>
      <img src ={data.image}/> 
      
      <div className="productDetails">
        <h2>{data.title}</h2>

        <div className="subDetails">
          <h3>Category: {data.category}</h3>
          <h3>Rating: {data.rating.rate} ({data.rating.count} Reviews)</h3>
        </div>

        <div className="details">
          <h3>Description:</h3>
          <p>{data.description}</p>
        </div>

        <div className="details">
          <h3>Price:</h3>
          <p>${data.price.toFixed(2)}</p>
        </div>

        <button onClick={() => handleClick()}>
          Add to Cart
        </button>

        <div className='response'>
          {error ? <p>Oops! An unexpected error has occurred. Please try again later.</p> : <span />}

          {errorMsg ? <p>{errorMsg}</p> : <span />}
          
          {success ? <p>{success}</p> : <span />}
        </div>

        <Link to="/" className="return">Go Back</Link>

      </div>
    </div>
  )
};

export default Product;