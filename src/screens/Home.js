import React from 'react'

const Home = () => {
    
  function buyBtn(e) {
    window.location.href = "/Buyegg"
  }


  return (
    <div>
        <div>Home</div>

        <div onClick= {buyBtn}>
            <h1>알 구매하러 가기</h1>
        </div>
    </div>
  )
}

export default Home