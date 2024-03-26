function Search({ data, setSearchedProducts }) {

  const searchProducts = (searchValue) => {
    // If there is no search input in the search bar, setSearchedProducts in Products component is set to an empty array.
    if (!searchValue) {
      setSearchedProducts([])
    } else {
      // Compares the search input to the product titles from the database and if matched, setSearchedProducts adds these products to the array for display.
      const searchedProducts = data.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
      setSearchedProducts(searchedProducts);
    }
  };

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(event) => searchProducts(event.target.value)}
      />
    </div>
  )
}

export default Search;