/*This component displays, throught the MainFeed component items such as stories, bookable items, events and other 
objects based on the object that is passed to it.   */
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import "./items.scss";
// import Router from "next/router";
// import "../../../public/scss/main.scss";

export default function Item(props) {
  const { itemobject } = props;
  console.log(itemobject); // key={itemobject.sys.id} add back to article element
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      {" "}
      <article className="mb-4 card bg-white border-bottom shadow-sm">
        <Link href="/plan/36kbQ5IUqVq8FY8qZiT8tt">
          <a>
            <section className="header-section media-section mb-2 d-none">
              <div className="row mx-0">
                <div className="left-side-wrap">
                  <div className="row">
                    <div className="profile-img-wrap">
                      <div className="image container">
                        <Link href="/">
                          <a>{/* <div
                      className="p-img-wrap"
                      style={{
                        backgroundImage: `url(${itemobjectelds.profile})`,
                      }}
                      src="/test"
                    ></div> */}</a>
                        </Link>
                      </div>
                    </div>
                    <div className="profile-text-wrap">
                      <div className="profile text data wrapper">{/* <Link href="/">
                  <a>
                    <strong>{itemobjectelds.profile.fields.profilename}</strong>
                  </a>
                </Link> */}</div>
                      {/* <div className="profile data text wrapper">{new Date(itemobject.sys.createdAt).toDateString()}</div> */}
                    </div>
                  </div>
                </div>
                <div className="right-side-wrap"></div>
              </div>
            </section>
            <section className="">
              {/* <div className="test-media-bg" style={{ backgroundImage: `url(${itemobject.fields.media[0].fields.file.url})` }}></div> */}
              <Carousel interval={null}>
                {itemobject.fields.media.map((image) => {
                  return (
                    <Carousel.Item>
                      {" "}
                      <div className="test-media-bg" style={{ backgroundImage: `url(${image.fields.file.url})` }}></div>
                      {/* <div src={image.fields.file.url}></div>*/}
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </section>
            <section className="text-section mt-3 px-3">
              <div className="txt-wrap">
                <div className="row">
                  <div className="col-8">
                    <h4 className="mb-2">Title</h4>

                    <p className="room-attributes">3 Beds | 4 Baths | 10 Guests</p>
                  </div>

                  <div className="col-4 align-right text-right">
                    <p>
                      <strong>
                        $495<span> /night</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="social lik | com | sha"></div>
            </section>

            <section>
              <div className="pricing mt-3">
                <div className=""></div>
              </div>
            </section>
            <section>
              <div className="ratings">
                <div className="Like Comment Share/Repost"></div>
              </div>
            </section>
            <section>
              <div className="comment box"></div>
            </section>
          </a>
        </Link>
      </article>
    </div>
  );
}

//height: "35px",
// width: "35px",
{
  /* <div
        className="p-img-wrap"
        style={{
          backgroundImage: `url(${itemobjectelds.media[0].fields.file.url})`,
        }}
      ></div> */
}
