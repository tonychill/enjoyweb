import "../../../../public/scss/content.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import ModalContainer from "../../utilities/modal";
import Join from "../../join/index";
const CTA = (props) => {
  //Looks like the follwing declarations are not needed for this component
  const router = useRouter();
  const { pid } = router.query;
  const dynamicClass = () => {
    let ctaClass = "pri-cta mb-5 ";
    ctaClass += props.auth.session ? "d-none" : null;
    return ctaClass;
  };

  return (
    <div className={dynamicClass()}>
      <div className="wrapper p-3">
        <video className="cta-bg-vid" preload="auto" loop={true} autoPlay={true}>
          <source className="au-target" au-target-id="152" src="/media/video/traveler_3_5_v02.mp4" type="video/mp4" />
          <source className="au-target" au-target-id="152" src="/media/video/traveler_30_10_15.webm" type="video/webm" />
        </video>
        <div className="row">
          <div className="cta-cont-wrap m-2 col-md-6">
            <h2 className="cta-title">Let's Plan a trip to the Caribbean!{pid}</h2>
            <p className="cta-dtext">Welcome to a place where you can plan the perfect trip for you and your family! Visit the Virgin Islands like never before.</p>

            <Button variant="primary" onClick={() => props.setModalShow(true)}>
              Join
              <span data-balloon="Copy Unicode Glyph" data-balloon-pos="down" className="dib hover-pink4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="svg-btn-icon">
                  <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" className=""></path>
                </svg>
              </span>
            </Button>
          </div>
        </div>
        <p></p>
      </div>
      {/* <ModalContainer show={modalShow} onHide={() => setModalShow(false)}>
        <Join auth={props.auth} />
      </ModalContainer> */}
    </div>
  );
};
export default CTA;
