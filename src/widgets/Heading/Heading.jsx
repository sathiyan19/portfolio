import React from 'react'

import './Heading.css'

const Heading = ({content}) => {
  return (
    <div className='heading_container'>
        <div className='heading_content'>{content}</div>
    </div>
  )
}

export default Heading