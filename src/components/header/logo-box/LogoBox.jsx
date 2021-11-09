import React from 'react'
import SearchBar from './search-bar/SearchBar'
import Terms from './terms/Terms'
import './_logo-box.scss'

const LogoBox = () => {
  return (
    <div className="logo-box_container">
      <div className="logo_container">
        <h1>The Nest Tool</h1>  
      </div>
      <div className="search-and-terms_container">

        <Terms />
        <SearchBar />
      </div>
    </div>
  )
}

export default LogoBox
