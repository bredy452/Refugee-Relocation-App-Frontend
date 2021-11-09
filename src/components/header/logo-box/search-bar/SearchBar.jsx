import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './_search-bar.scss'

const SearchBar = () => {
  return (
    <div className="search_container">
      <input type="search" name="search" id="seach" className="search_input"/>
      <div className="search_icon-container">
        <FontAwesomeIcon icon={faSearch} className="search_icon" />
      </div>
    </div>
  )
}

export default SearchBar
