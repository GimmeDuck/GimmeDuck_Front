import React, { useEffect, useState } from "react";
import "../style/Donate.css";
import axios from "axios";
let name;

//콤보박스에서 가져온 값 여기에 담아야 하는데
//문제? custom창에서 가져오고 나서 이 페이지가 렌더링 돼서
//name 변수가 새로 정의 되면서 담긴 값이 날아감 우쨰?
export function Fandom(paraName) {
  this.name = paraName;
  console.log(name);
}

const Donate = () => {
  const [fdm, Setfdm] = useState("fandom");
  const [full, setFull] = useState(true);

  const img = localStorage.getItem("imgURL");
  axios.post("/test", { image: img }).then((response) => {
    console.log(response.data);
  });

  function homeBtn(e) {
    window.location.href = "/";
  }

  const today = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    return year + ". " + month + ". " + date + ". " + hour + ":" + min;
  };

  return (
    <div className="donate_back">
      <img src="img/albumSlide2.png" className="slide_back1" />
      <img
        src="img/albumSlide2.png"
        className="slide_back2"
        style={{ marginTop: "11%" }}
      />
      <img
        src="img/albumSlide1.png"
        className="slide_back1"
        style={{ marginTop: "22.2%" }}
      />
      <img
        src="img/albumSlide1.png"
        className="slide_back2"
        style={{ marginTop: "33.1%" }}
      />
      <div className="donate">
        <div className="donate_rapper_title">
          <div className="donate_text">
            <div className="donate_fandom_name">DIVE</div>
            <div
              className="donate_fandom_content"
              style={{ fontSize: "1.3vmax", marginTop: "0" }}
            >
              20KLAY
            </div>
            <div className="donate_fandom_content">
              팬들이 참여하는 따뜻한 나눔은
              <br /> <br />
              소외된 이웃에게 행복과 희망을 가져다주며
              <br /> <br />
              더 나아가 우리 모두가 함께하는 세상을
              <br /> <br />
              만드는데에 참여하셨습니다
              <br /> <br />
              이에 감사의 마음을 담아 <br /> <br />이 증서를 드립니다
            </div>
            <div
              className="donate_fandom_content"
              style={{
                fontSize: "0.7vmax",
                color: "rgb(172, 160, 140)",
                fontWeight: "700",
                marginTop: "5vmax",
                textAlign: "right",
              }}
            >
              기미덕 드림
              <br />
              {today()}
            </div>
          </div>
        </div>
      </div>
      <img className="donate_rapper_nft" src={img} />
      <button onClick={homeBtn} className="donate_home_button">
        TO HOME
      </button>
    </div>
  );
};

export default Donate;
