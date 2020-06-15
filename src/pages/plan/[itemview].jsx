/*Displays to the view based on the query passed to it  */
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// import "react-responsive-carousel/lib/styles/carousel.min.scss";
// import { Carousel } from "react-responsive-carousel";
// import GoogleMap from "../../planning/googlemap";
// import "./bookable.scss";
import Layout from "../../components/layout";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "../../../public/scss/main.scss";
import Carousel from "react-bootstrap/Carousel";
import GoogleMap from "../../components/planning/googlemap";

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // item: this.props.item,
      // itemview: this.props.itemview,
      // relatedItems: this.props.relatedItems,
      // client: this.props.client,
      meta: {
        title: "test title",
        description: "description...",
      },
    };

    const relatedItems = props.relatedItems;
    //this.handleItemView = this.handleItemView.bind(this); ??
    console.log(this.props);
  }

  render() {
    const { Item } = this.props;
    return (
      <Layout meta={this.state.meta}>
        <main className="">
          <div className="row">
            <div className="col-md-8">
              <section className="header-section d-none">
                <h2>The Name of the Villa</h2>
              </section>
              <section className="media-section">
                <Carousel interval={null}>
                  {Item.fields.media.map((image) => {
                    return (
                      <Carousel.Item>
                        <div className="test-media-bg" style={{ backgroundImage: `url(${image.fields.file.url})` }}></div>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </section>
              <section className="nameprice">
                <hgroup className="mt-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="features">{Item.fields.name}</h3>
                    </div>
                    <div className="col-md-6 justify-content-end">
                      <h3 className="text-right">
                        ${Item.fields.price}
                        <span> /night</span>
                      </h3>
                    </div>
                  </div>
                </hgroup>
              </section>
              <section className="overview-section mt-4">
                <div>
                  {documentToHtmlString(Item.fields.body).substring(0, 240) + "..."}
                  <span>
                    <a>
                      <u className="font-weight-bold ml-3" onClick={() => alert("hello")}>
                        Read more
                      </u>
                    </a>
                  </span>
                  {/* <div
                  id="rich-text-body"
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(Item && Item.fields && Item.fields.body),
                  }}
                ></div> */}
                </div>
              </section>
              <hr />
              <section className="amenities wrapper">
                <hgroup>
                  <h5>
                    <>Amenities</>
                  </h5>
                </hgroup>
                <div className="amenities list row">
                  {Item.fields.amenities.map((item_amenity) => {
                    return (
                      <div>
                        <span>
                          <i>i</i>
                        </span>
                        <p className="col-md-6">{item_amenity}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
              <hr />
              <section className="availability wrapper">
                <hgroup>
                  <h5>
                    <strong>Availability</strong>
                  </h5>
                </hgroup>
                <div className="calendar">Calendar goes here.</div>
              </section>
              <hr />
              <section className="location wrapper">
                <hgroup>
                  <h5>
                    <strong>Location</strong>
                  </h5>
                </hgroup>
                <div className="map wrapper d-border mt-4">
                  <GoogleMap
                    center={{
                      lat: Item.fields.location.lat,
                      lng: Item.fields.location.lon,
                    }}
                  />
                </div>
              </section>
              <hr />
              <section className="related content wrapper"></section>
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
              {/* <section className="related items section">
                <div className="row">
                  {this.relatedItems.length > 0
                    ? this.relatedItems.slice(0, 3).map((s) => {
                        return (
                          <a key={s.sys.id} className="col-md-4 p-0" onClick={() => Router.push(`/stories/${s.sys.id}`)}>
                            <article className="mb-4 card border-0 p-2">
                              <section className="s-img-wrap">
                                {/* <Link href="/stories/[sid]" as={`/stories/${s.sys.id}`}> 

                                <div
                                  className="feedimage"
                                  style={{
                                    backgroundImage: `url(${s.fields.image.fields.file.url})`,
                                  }}
                                ></div>
                              </section>
                              <section>
                                <div className="social lik | com | sha"></div>
                              </section>
                              <section className="mt-3">
                                <div className="txt-wrap">
                                  <Link href={s.sys.id} as={s.fields.title}>
                                    <p className="s-tit font-weight-bold col-8 mb-1 pl-0">{s.fields.title}</p>
                                  </Link>
                                  <Link href={s.sys.id}>
                                    <p className="s-txt st-tx text-secondary mt-2 mb-1 pl-0">{s.fields.description}</p>
                                  </Link>
                                  <Link href={s.sys.id}>
                                    <span className="blu-lk">
                                      <p href="#">more</p>
                                    </span>
                                  </Link>
                                </div>
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
                            </article>
                          </a>
                        );
                      })
                    : null}
                </div>
              </section> */}
            </div>
            <div className="col-md-4 sticky-top">Control Center goes here</div>
          </div>
        </main>
      </Layout>
    );
  }
}
ItemView.getInitialProps = async function (context) {
  const { itemview } = context.query;
  // console.log("context query itemview object:", itemview);
  const client = require("contentful").createClient({
    // $$$ Remove keys and replace with environment variables.
    space: "g5nrk2qtffpm",
    accessToken: "zKNsjO92AmeVn_N82gpDsfFG2c2-yoeh1gavLSSpIrk",
  });
  const Item = await client.getEntry(itemview);
  const convertedRichText = documentToHtmlString(Item.fields.body);
  console.log("rich text: ", convertedRichText);
  // console.log("getInitialProps ItemView:", Item);

  // Pulls in related items relative to the loaded item.
  // const getItemTags = () => {
  //   if (Item.fields.tags) {
  //     return Item.fields.tags.toString();
  //   } else return "";
  // };
  // const tags = getItemTags();
  // console.log("Tags:", tags);

  // const getRelatedItems = async () => {
  //   return await client
  //     .getEntries({
  //       content_type: "bookable",
  //       "fields.tags[in]": tags,
  //     })
  //     .then((relatedItems) => {
  //       return relatedItems;
  //     });
  // };
  // const { items: relatedItems } = await getRelatedItems();

  return { Item, convertedRichText };
};
export default ItemView;

/*

Suggestions? - allow users to browse tips and other things that they should do or book in conjunction with the current bookable. 
Cancelation - policy */
