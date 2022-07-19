import React from 'react'
import '../style/Custom.css'

const Custom = () => {

function mintBtn(e) {
    window.location.href = "/Donate"
    }
    
  return (
    <div style={{backgroundColor:'black', color:'white', paddingTop:'70px', paddingLeft:'50px', paddingRight:'50px'}}>

        <div className='title'> 랜덤으로 발행 </div>
        <div className='box'>
            직접 커스터마이징 하지 않고, 랜덤 아이템으로 내 캐릭터를 만듭니다.
            <br/>
            <span style={{color:'lightgoldenrodyellow'}}># 희소성이 높은 아이템이 포함될 수 있습니다!</span> 
            <div style={{backgroundColor:'red'}}>
                <button className='cusbutton'>랜덤으로 발행</button>
            </div>
        </div>
        
        
        <div className='title' style={{marginTop:'30px'}}> 커스터마이징하여 발행 </div>
        <div className='box'>
            직접 커스터마이징 하지 않고, 랜덤 아이템으로 내 캐릭터를 만듭니다.
            <br/>
            <span style={{color:'lightgoldenrodyellow'}}># 희소성이 높은 아이템이 포함될 수 있습니다!</span> 
            <button className='cusbutton' onClick={mintBtn}>나만의 NFT 발행</button>
        </div>
    </div>
    
  )
}

export default Custom