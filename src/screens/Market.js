import React from 'react'

const Market = () => {
  return (
    <>
    <div>
      <img className='medal' src='img/medal.PNG' />
    </div>
    <div style={{height: '100vh'}}>
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