import React from "react";
import HstPie from "../components/charts/HstPie.js";
import "../style/History.css";
import ChartTest from "../components/charts/HstPie2.js";
function History() {
  return (
    <div className="Back">
      <div className="ChartBox">
        <HstPie />
        <div>
          <ChartTest />
          <div className="font" style={{ marginTop: "10%" }}>
            취약 노인도시락 지원 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            130,000
          </div>
          <div className="font">
            회계담당자 인건비
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            130,000
          </div>
          <div className="font">
            모금 홍보비 비용 &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 130,000
          </div>
        </div>
      </div>
      <div style={{ padding: "10%", paddingTop: "2%", color: "gray" }}>
        <hr style={{ color: "white", marginBottom: "3%" }} />
        <h5 style={{ margin: "2%" }}>기관소개</h5>
        <img src="img/history1.png" />
      </div>
    </div>
  );
}

export default History;
