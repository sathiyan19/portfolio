import React from 'react'
import './InfiniteScroll.css'

const InfiniteScroll = ({direction,skill_set}) => {


  return (
    <div className='infi_scroll_cont'>
        {
            skill_set.map((item,index)=>(
                <div className={`infi_scroll_item ${direction=='right'?'right_scrolling_item':'left_scrolling_item'}`} style={{animationDelay:`${ (30/skill_set.length)*(skill_set.length-index) * -1 }s`}}>
                    <div className='infi_scroll_img_holder'><img className='infi_scroll_img' src={item.skill_logo}/></div>
                    <div className='infi_scroll_desc'>{item.skill_name}</div>
                </div>
            ))
        }
    </div>
  )
}

export default InfiniteScroll