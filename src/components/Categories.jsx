function Categories({ data, setFilteredProducts }) {

  // console.log("Data in Categories", data)

  const filterProductsByCategory = (category) => {
    const filterProducts = data.filter((product) => product.category.toLowerCase() === category);
    setFilteredProducts(filterProducts);
  }

  return (
    <div>
      <div className="filter">
        <h4><button onClick={() => filterProductsByCategory(null)}>All</button></h4>
        <h4><button onClick={() => filterProductsByCategory("men's clothing")}>Men's Clothing</button></h4>
        <h4><button>Women's Clothing</button></h4>
        <h4><button>Jewelry</button></h4>
        <h4><button onClick={() => filterProductsByCategory()}>Electronics</button></h4>
      </div>
      {/* <div>
        {
          data?.map((product) => {
            return (
              <div>
                <p>{product.category}</p>
              </div>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default Categories;