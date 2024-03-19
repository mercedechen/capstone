function Filter({ data, setFilteredProducts }) {
  // Removes category filter by setting setFilterProducts in Products component back to an empty array and displays all products from database.
  const removeFilter = () => {
    setFilteredProducts([]);
  }

  // Displays products with category: men's clothing
  const filterByMen = () => {
    const men = data.filter((product) => {
      return (
        product.category.toLowerCase() === (`men's clothing`)
      )
    });
    setFilteredProducts(men);
  }

  // Displays products with category: women's clothing
  const filterByWomen = () => {
    const women = data.filter((product) => {
      return (
        product.category.toLowerCase() === (`women's clothing`)
      )
    });
    setFilteredProducts(women);
  }

  // Displays products with category: jewelery
  const filterByJewelery = () => {
    const jewelery = data.filter((product) => {
      return (
        product.category.toLowerCase() === ("jewelery")
      )
    });
    setFilteredProducts(jewelery);
  }

  // Displays products with category: electronics
  const filterByElectronics = () => { 
    const electronics = data.filter((product) => {
      return (
        product.category.toLowerCase() === ("electronics")
        )
      });
      setFilteredProducts(electronics);
  }

  return (
    <div>
    </div>
  )
}

export default Filter;