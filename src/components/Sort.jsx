function Sort({ data, setSortProducts }) {

  console.log('Data', data);

  const sort = (e) => {
    console.log('Option', e.target.value)
    
    // Sort products in alphabetical order (A-Z)
    if(e.target.value === "1"){
      const sorted = [...data]?.sort((a,b) => a.title.localeCompare(b.title))
      console.log('sorted', sorted)
      setSortProducts(sorted);
    // Sort products in reverse alphabetical order (Z-A)
    } else if (e.target.value === "2"){
      const sorted = [...data]?.sort((a,b) => a.title.localeCompare(b.title)).reverse()
      console.log('sorted', sorted)
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