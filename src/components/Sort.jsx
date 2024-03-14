function Sort({ data, setSortProducts }) {

  return (
    <div className="sort-box">
      <h4>Sort By</h4>
      <select name="sort" className="sort">
        <option>Name (A to Z)</option>
        <option>Name (Z to A)</option>
        <option>Lowest price first</option>
        <option>Highest price first</option>
      </select>
    </div>
  )
}

export default Sort;