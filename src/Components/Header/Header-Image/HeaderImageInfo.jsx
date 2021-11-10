import React from 'react'
import headerImage from './RefugeePicture.png'
import './_Header-Image.scss'

const HeaderImage = () => {
  return (
    <div className="header-image_container">
      <img src={headerImage} alt="Mother and Child" />
    </div>
  )
}

export default HeaderImage
