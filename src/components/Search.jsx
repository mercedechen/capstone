function Search({data, setFilteredProducts}) {

  const filterProducts = (searchValue) => {
    if (!searchValue) {
      setFilteredProducts([])
    } else {
      const filteredProducts = data.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
      console.log('filteredProducts', filteredProducts)
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Search" 
          onChange={(event) => filterProducts(event.target.value)}/>
      </form>
    </div>
  )
}

export default Search;