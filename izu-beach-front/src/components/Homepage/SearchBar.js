import React from "react"

export default function SearchBar(searchItems) {

  return(
    <input icon='search'
        placeholder='Search a location!'
        onChange={(e) => searchItems(e.target.value)}>
    </input>
  )
}
// currently not working...
