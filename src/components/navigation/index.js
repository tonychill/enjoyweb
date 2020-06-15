//components/navigation/topnav/index.js
import Link from "next/link";
import styled from "styled-components";
import NavBarLinks from "./primarynav/links/navbarlinks";
import ModalContainer from "../utilities/modal";
import { MdMenu } from "react-icons/md";
import Search from "./search";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./primarynavigation.scss";
import { Auth } from "aws-amplify";
const router = useRouter;
const asLink = router.query;

const DesktopNav = styled.header`
  position: sticky !important;
  top: 0px !important;
  z-index: 99 !important;
  width: 100% !important;
  /*box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;*/
  }
`;

const MobileNav = styled.header`
  position: sticky !important;
  top: 0px !important;
  z-index: 99 !important;
  width: 100% !important;
  /*box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;*/
  @media (min-width:576px){display: none;}
  @media (max-width: 575px) {
 
  top: auto !important;
  margin-bottom: env(safe-area-inset-bottom) !important;
  padding-left: env(safe-area-inset-left) !important;
  padding-right: env(safe-area-inset-right) !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  display: -webkit-box !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-flex !important;
  display: flex !important;
  -webkit-align-items: center !important;
  align-items: center !important;
  border-top: 1px solid #ebebeb !important;
  position: fixed !important;
  bottom: -60px !important;
  height: 139px !important;
  left: 0px !important;
  right: 0px !important;
  padding-bottom: 60px !important;
  overflow: hidden !important;
  background: #ffffff !important;
  -webkit-transition: -webkit-transform 0.2s
      cubic-bezier(0.455, 0.03, 0.515, 0.955),
    transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
  -moz-transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    visibility 0.2s !important;
  transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
  z-index: 1 !important;
}
  }
`;

let UserOptions = styled.button`
  background: gray;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;
  padding-bottom: 8px;
`;

const PrimaryNavigation = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <DesktopNav id="" className="testnavheader container t-nav-bg shadow-md">
        <nav className="navbar nav navbar-expand-lg py-3 px-0">
          <section className="navbar-brand">
            <Link href="/" as="/">
              <a className="p-0">
                <img src="/media/active-icons/coconut_logo.png" width="" height="35" alt="" />

                <span className="pl-2 navbar-brand-text">
                  <strong>enjoythevi</strong>
                </span>
              </a>
            </Link>
          </section>
          <section>
            <Search />
          </section>
          <section className="ml-auto desktop-menu">
            <div style={{ display: "inline-block" }}>
              <NavBarLinks />
            </div>
            <span>
              {props.auth.authStatus && props.auth.user && <>username</>}
              {/* {props.auth.user.attributes.name} */}
            </span>
            <MdMenu className="curs-point" size="1.3em" onClick={navDrop} />
            <div id="useroptions" className="nv-drop mr-2">
              <div className="my-2">
                <Link href="/login">
                  <a className="nav-link">Login</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Invite Friends</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Help</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Terms</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a onClick={props.auth.handleLogOut} className="nav-link">
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </nav>
      </DesktopNav>
      <MobileNav id="" className="testnavheader t-nav-bg shadow-sm">
        <nav className="navbar nav container-fluid m-auto">
          <Row className="justify-content-center container-fluid mx-0" xs={{ col: 3 }}>
            <Col xs={"auto"}>
              <Link href="/" as="/">
                <a className="nav-link col m-auto">
                  <div className=" m-auto text-center">
                    <img width="" height="25" alt="" src="/media/active-icons/discover.svg" />
                  </div>

                  {/* <p className="m-auto">Diver</p> */}
                </a>
              </Link>
            </Col>
            <Col xs={"auto"}>
              <Link href="/plan" as="/plan">
                <a className="nav-link col m-auto">
                  <div className=" m-auto text-center">
                    <img width="" height="25" alt="" src="/media/active-icons/plan.svg" />
                  </div>

                  {/* <p className="m-auto">Plan</p> */}
                </a>
              </Link>
            </Col>
            <Col xs={"auto"}>
              <Link href="/trips" as="/trips">
                <a className="nav-link col m-auto">
                  <div className=" m-auto text-center">
                    <img width="" height="25" alt="" src="/media/active-icons/trips.svg" />
                  </div>

                  {/* <p className="m-auto">Trips</p> */}
                </a>
              </Link>
            </Col>

            <Col xs={"auto"}>
              <Link href="/trips" as="/tripss">
                <a className="nav-link col">
                  <div className=" m-auto text-center">
                    <img width="" height="25" alt="" src="/media/active-icons/menu.svg" onClick={() => setModalShow(true)} />
                  </div>
                  {/* <p className="m-auto">More</p> */}
                </a>
              </Link>
            </Col>
          </Row>
          <ModalContainer show={modalShow} onHide={() => setModalShow(false)} type={true}>
            <div id="" className=" mr-2">
              <div className="my-2">
                <Link href="/auth/login">
                  <a className="nav-link">Login</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Invite Friends</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Help</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a className="nav-link">Terms</a>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/">
                  <a onClick={props.auth.handleLogOut} className="nav-link">
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </ModalContainer>
        </nav>
      </MobileNav>
    </>
  );
};
const navDrop = () => document.getElementById("useroptions").classList.toggle("show");

// Close the dropdown menu if the user clicks outside of it
global.onclick = function (event) {
  if (!event.target.matches(".dropbtn, body")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
export default PrimaryNavigation;
