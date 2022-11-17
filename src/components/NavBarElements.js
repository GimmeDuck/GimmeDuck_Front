import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/NavBar.css";
import { QRCodeSVG } from "qrcode.react";
import * as KlipAPI from "../screen_js/Buyegg_js";
import Modal from "react-modal";

//    <Navbar scrolling dark expand="md" fixed="top" >

const NavBarElements = () => {
  // const DEFAULT_QR_CODE = "DEFAULT";
  // const DEFAULT_ADDRESS = "0x00000000000000000000000000000";

  // const [send_modalIsOpen, send_setModalIsOpen] = useState(false);
  // const [qrvalue_execute, setQrvalue_execute] = useState(DEFAULT_QR_CODE);
  // const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
  // const [duck, setDuck] = useState(0);

  // function wallet_modalOpen() {
  //   KlipAPI.getAddress(setQrvalue_auth, async (address) => {
  //     setMyAddress(address);
  //   });
  //   auth_setModalIsOpen(true);
  // }

  // useEffect(() => {
  //   if (myAddress !== DEFAULT_ADDRESS) {
  //     // caver js나 klip으로 주소의 balanceOf 가져오기
  //     console.log(myAddress);
  //   }
  // }, [myAddress]);

  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "black" }}
    >
      <Navbar.Brand
        href="/"
        style={{
          fontWeight: 1000,
          color: "#EEB000",
          fontSize: 35,
          marginLeft: "3%",
        }}
      >
        GIMME-DUCK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Introduction">Introduction</Nav.Link>
          {/* <Nav.Link href="/Tutorial">Tutorial</Nav.Link> */}
          <Nav.Link href="/History">History</Nav.Link>
          <Nav.Link href="/Market">Market</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* <div className="NavBar_box">
        <button className="NavBar_btn" onClick={() => wallet_modalOpen()}>
          Klip 지갑연동
        </button>
        <Modal className="NavBar_popup" isOpen={send_modalIsOpen}>
          <QRCodeSVG className="NavBar_qrcode" value={qrvalue_execute} />
          <div
            className="NavBar_close"
            onClick={() => send_setModalIsOpen(false)}
          ></div>
        </Modal>
        <div className="NavBar_text">보유 기미덕 {duck} 개</div>
      </div> */}
    </Navbar>
  );
};

export default NavBarElements;
