import { useProductsQuery } from '../redux/api'

function Products() {

  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) {
    return <p>Loading Products...</p>
  }

  if (error) {
    return <p>Oops! An unexpected error has occurred. Please try again later.</p>
  }

  return (
    <div className="products">
      {
        data?.map(
          (product) => {
            return (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Products;