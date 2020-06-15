//Pulls in all story type content from Contentful and renders it on the index page.
import { useEffect, useState } from "react";
import Link from "next/link";
// The following should eventually be romove and the item component will handlle
// whether to display as a cta or whatever object is passed to it.
import CTA from "./feed/cta"; // import Masonry from "react-masonry-css";
import PopularItems from "./feed/popularitems";
import "./maincontent.scss";

const MainContent = ({ alt, title, pimage, body, auth, setModalShow }) => {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_SECRET_KEY,
  });
  async function fetchEntriesForContentType() {
    const entries = await client.getEntries({
      order: "-sys.createdAt",
      content_type: "story",
    });
    //console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function getStories() {
      const allStories = await fetchEntriesForContentType();
      setStories([...allStories]);
    }
    getStories();
  }, []);
  return (
    <main className="mt-5">
      {/* <section className="main-contnetx  xcol-md-8 xm-auto xflex-item"> */}
      {/* <div className="col-md-12 m-0"> */}
      <article>
        <CTA auth={auth} setModalShow={setModalShow} />
      </article>
      <article>
        <PopularItems />
      </article>
      {stories.length > 0
        ? stories.map((s) => {
            //const sl = `/discover/${s.sys.id}`;
            return (
              <article key={s.sys.id} className="mb-4 card border-0 bg-white">
                <section className="top-bar-wrap mb-3">
                  <div className="row mx-0">
                    <div className="left-side-wrap">
                      <div className="row">
                        <div className="profile-img-wrap">
                          <div className="image container">
                            <Link href="/">
                              <a>
                                <div
                                  className="p-img-wrap"
                                  style={{
                                    backgroundImage: `url(${s.fields.profile.fields.profilepic.fields.file.url})`,
                                  }}
                                  src="/test"
                                ></div>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="profile-text-wrap">
                          <div className="profile text data wrapper">
                            <Link href="/">
                              <a>
                                <strong>{s.fields.profile.fields.profilename}</strong>
                              </a>
                            </Link>
                          </div>
                          <div className="profile data text wrapper">{new Date(s.sys.createdAt).toDateString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="right-side-wrap"></div>
                  </div>
                </section>
                <section className="s-img-wrap">
                  <Link href="/discover/[sid]" as={`/discover/${s.sys.id}`}>
                    <a>
                      <div
                        className="feedimage"
                        style={{
                          backgroundImage: `url(${s.fields.image.fields.file.url})`,
                        }}
                      ></div>
                    </a>
                  </Link>
                </section>
                <section>
                  <div className="social lik | com | sha"></div>
                </section>
                <section className="text-section mt-3">
                  <div className="txt-wrap">
                    <Link href={s.sys.id} as={s.fields.title}>
                      <span>
                        <a className="s-tit font-weight-bold col-8 mb-1 pl-0">{s.fields.title}</a>
                      </span>
                    </Link>
                    <Link href={s.sys.id}>
                      <span className=" text-secondary mt-2 mb-1 pl-0">{s.fields.description}</span>
                    </Link>
                    <Link href={s.sys.id}>
                      <span className="blu-lk">
                        <a href="#">more</a>
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
            );
          })
        : null}

      <div className="feed mt-4 mb-4 m-auto xmw-700"></div>
    </main>
  );
};

export default MainContent;
