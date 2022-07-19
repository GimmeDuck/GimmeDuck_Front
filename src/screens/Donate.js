import React from 'react'
import '../style/Donate.css'

const Donate = () => {
  return (
    <div className='donate'>
      <div className='donate_rapper'>
        <div className='donate_rapper_title'>
          <img className='donate_title_balloon'src='img/balloons.png' />
          <h3 style={{fontWeight:700, fontSize:35}}>나만의 김희덕 탄생</h3>
          <img className='donate_title_balloon'src='img/balloons.png' />
        </div>
        <div className = 'donate_rapper_imgrap'>
          <img className='donate_rapper_nft' src = 'img/1.png'/>
          <img className='donate_rapper_img' src = 'img/donate.jpg'/>
        </div>
        
      </div>
    </div>
  )
}

export default Donate