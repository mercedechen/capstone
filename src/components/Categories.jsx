function Categories({ data, setFilteredProducts }) {
  // wip
  const filterProductsByCategory = (category) => {
    const filterProducts = data.filter((product) => product.category.toLowerCase() === category);
    setFilteredProducts(filterProducts);
  }

  return (
    <div className="filter">
      <button onClick={() => filterProductsByCategory(null)}>All</button>
      <button onClick={() => filterProductsByCategory("men's clothing")}>Men's Clothing</button>
      <button>Women's Clothing</button>
      <button>Jewelry</button>
      <button onClick={() => filterProductsByCategory()}>Electronics</button>
    </div>
  )
}

export default Categories;