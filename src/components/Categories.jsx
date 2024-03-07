function Categories({ data, setFilteredProducts }) {
  // wip
  const filterProductsByCategory = (category) => {
    const filterProducts = data.filter((product) => product.category.toLowerCase() === category);
    setFilteredProducts(filterProducts);
  }

  return (
    <div className="filter">
      <button>All</button>
      <button>Men's Clothing</button>
      <button>Women's Clothing</button>
      <button>Jewelry</button>
      <button>Electronics</button>
    </div>
  )
}

export default Categories;