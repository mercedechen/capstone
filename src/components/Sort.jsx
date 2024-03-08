function Sort() {
  return (
    <div className="sort-box">
      <h4>Sort By</h4>
      <select name="sort" className="sort">
        <option value="AtoZ">Name (A to Z)</option>
        <option value="ZtoA">Name (Z to A)</option>
        <option value="priceInc">Lowest price first</option>
        <option value="priceDec">Highest price first</option>
      </select>
    </div>
  )
}

export default Sort;