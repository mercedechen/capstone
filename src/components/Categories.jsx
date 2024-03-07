function Categories({ data, setFilteredProducts }) {

  const filterProducts = () => { 
    const filterByElectronics = data.filter((product) => {
      return (
        product.category.toLowerCase().includes("electronics")
      )
    })
    setFilteredProducts(filterByElectronics);
    console.log('electronics', filterByElectronics);
  }

  return (
    <div className="filter">
      <button onClick={filterProducts}>Electronics</button>
    </div>
  )
}

export default Categories;