import React from 'react'
import '../style/Market.css'

const Market = () => {
  return (
    <>
      <div className='medal'>
        <div className='second'><img className = 'img' src='img/2.png' /></div>
        <div className='first'><img className = 'img' src='img/1.png'  /></div>
        <div className='second'><img className = 'img' src='img/3.png' /></div>
      </div>
      <div style={{ height: '70vh' }}>
        <iframe
          src="https://testnets.opensea.io/collection/gimmeduck-token"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </>

  )
}

export default Market