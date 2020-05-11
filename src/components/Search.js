import React, { useState } from "react"

const Search = props => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = e => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form action="" className="search">
      <input title="input film name" data-testid="field" className="button field" type="text" value={searchValue} onChange={handleSearchInputChanges}/>
      <input data-testid="submit" className="button" type="submit" onClick={callSearchFunction} value="SEARCH"/>
    </form>
  )
}

export default Search