function Search({ data, setSearchedProducts }) {

  const searchProducts = (searchValue) => {
    if (!searchValue) {
      setSearchProducts([])
    } else {
      const searchedProducts = data.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
      setSearchedProducts(searchedProducts);
    }
  };

  return (
    <div className="searchBar">
      <form>
        <input 
          type="text" 
          placeholder="Search" 
          onChange={(event) => searchProducts(event.target.value)}/>
      </form>
    </div>
  )
}

export default Search;