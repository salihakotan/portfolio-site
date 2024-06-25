import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>Saliha Kotan © {year} </div>
  )
}

export default Footer