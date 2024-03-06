function Categories({ data, setFilteredProducts }) {
  // wip
  const filterProductsByCategory = (category) => {
    const filterProducts = data.filter((product) => product.category.toLowerCase() === category);
    setFilteredProducts(filterProducts);
  }

  return (
    <div className="filter">
      <a href="" onClick={() => filterProductsByCategory(null)}>All</a>
      <a href="" onClick={() => filterProductsByCategory("men's clothing")}>Men's Clothing</a>
      <a href="">Women's Clothing</a>
      <a href="">Jewelry</a>
      <a href="" onClick={() => filterProductsByCategory()}>Electronics</a>
    </div>
  )
}

export default Categories;