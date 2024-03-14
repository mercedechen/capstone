function Sort({ data, setSortProducts }) {

  console.log('Data', data);

  const sort = (e) => {    
    // Sort products in alphabetical order (A-Z)
    if(e.target.value === "1"){
      const sorted = [...data]?.sort((a,b) => a.title.localeCompare(b.title))
      setSortProducts(sorted);

    // Sort products in reverse alphabetical order (Z-A)
    } else if(e.target.value === "2"){
      const sorted = [...data]?.sort((a,b) => a.title.localeCompare(b.title)).reverse()
      setSortProducts(sorted);

    // Sort products by increasing price
    } else if(e.target.value === "3"){
      const sorted = [...data]?.sort((a,b) => {
        return (a.price - b.price)
      })
      setSortProducts(sorted);
      
      // Sort products by decreasing price
    } else if(e.target.value === "4"){
      const sorted = [...data]?.sort((a,b) => {
        return (b.price - a.price)
      })
      setSortProducts(sorted);
    }
  }

  return (
    <div className="sort-box">
      <select name="sort" className="sort" onChange={sort}>
        <option>Sort by</option>
        <option value="1">Name (A to Z)</option>
        <option value="2">Name (Z to A)</option>
        <option value="3">Lowest price first</option>
        <option value="4">Highest price first</option>
      </select>
    </div>
  )
}

export default Sort;