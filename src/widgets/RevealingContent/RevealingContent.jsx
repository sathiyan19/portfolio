import React from 'react'
import './RevealingContent.css'

const RevealingContent = ({content,pad_px}) => {
  return (
    <div className='reveal_content_container' style={{padding:`0 ${pad_px}px`}}>
      <p className='reveal_content'>{content}</p>
    </div>
  )
}

export default RevealingContent