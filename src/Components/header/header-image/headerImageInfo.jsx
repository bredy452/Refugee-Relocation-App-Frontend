import React from 'react'
import headerImage from './refugeePicture.png'
import './_header-image.scss'

const HeaderImage = () => {
  return (
    <div className="header-image_container">
      <img src={headerImage} alt="Mother and Child" />
    </div>
  )
}

export default HeaderImage
