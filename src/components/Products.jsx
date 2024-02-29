import { useProductsQuery } from '../redux/api'

function Products() {

  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) {
    <div>Loading...</div>
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