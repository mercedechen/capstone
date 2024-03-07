function Categories({ data, setFilteredProducts }) {
  // Removes category filter by setting setFilterProducts in Products component back to an empty array and displays all products from database.
  const removeFilter = () => {
    setFilteredProducts([]);
  }

  // Displays products with category: men's clothing
  const filterByMen = () => {
    const men = data.filter((product) => {
      return (
        product.category.toLowerCase().includes(`men's clothing`)
      )
    });
    setFilteredProducts(men);
    console.log(`men's clothing`, men)
  }

  // Displays products with category: women's clothing
  const filterByWomen = () => {
    const women = data.filter((product) => {
      return (
        product.category.toLowerCase().includes(`women's clothing`)
      )
    });
    setFilteredProducts(women);
    console.log(`women's clothing`, women);
  }

  // Displays products with category: jewelery
  const filterByJewelery = () => {
    const jewelery = data.filter((product) => {
      return (
        product.category.toLowerCase().includes("jewelery")
      )
    });
    setFilteredProducts(jewelery);
    console.log('jewelery', jewelery);
  }

  // Displays products with category: electronics
  const filterByElectronics = () => { 
    const electronics = data.filter((product) => {
      return (
        product.category.toLowerCase().includes("electronics")
        )
      });
      setFilteredProducts(electronics);
      console.log('electronics', electronics);
  }

  return (
    <div className="filter">
      <button onClick={removeFilter}>All</button>
      <button onClick={filterByMen}>Men</button>
      <button onClick={filterByWomen}>Women</button>
      <button onClick={filterByJewelery}>Jewelery</button>
      <button onClick={filterByElectronics}>Electronics</button>
    </div>
  )
}

export default Categories;