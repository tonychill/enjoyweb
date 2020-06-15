import Link from "next/link";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
//import Masonry from "react-masonry-css";
import "../../../../public/scss/main.scss";
import "./story.scss";
import Router from "next/router";

const Story = (props) => {
  const story = props.story;
  const relatedStories = props.relatedStories;
  const breakpointColumnsObj = {
    default: 3,
    1300: 2,
    700: 1,
  };
  return (
    <main>
      <div>
        <article className="story m-auto mw-680">
          <section className="content">
            <div className="bg-primary">
              <div key={story && story.sys && story.sys.id} className="">
                <article
                  key={story && story.sys && story.sys.id}
                  className=" mb-4 bg-white"
                >
                  <section className="mt-3">
                    <div className="txt-wrap">
                      <h1 className="s-tit font-weight-bold col-8 mb-1 pl-0">
                        {story && story.fields && story.fields.title}
                      </h1>
                      <p className="card-subtitle text-gray">
                        {new Date(
                          story && story.sys && story.sys.createdAt
                        ).toDateString()}
                      </p>

                      <p className="s-txt st-tx text-secondary mt-2 mb-1 pl-0">
                        {story && story.fields && story.fields.description}
                      </p>
                    </div>
                  </section>

                  <section className="s-img-wrap">
                    <div
                      className="feedimage"
                      style={{
                        backgroundImage: `url(${
                          story &&
                          story.fields &&
                          story.fields.image &&
                          story.fields.image.fields &&
                          story.fields.image.fields.file &&
                          story.fields.image.fields.file.url
                        })`,
                      }}
                    ></div>
                  </section>
                  <section className="mt-4">
                    <div
                      id="rich-text-body"
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(
                          story && story.fields && story.fields.body
                        ),
                      }}
                    ></div>
                  </section>
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
                </article>
              </div>
            </div>
          </section>
        </article>
      </div>

      <section>
        <div className="row mx-0">
          {relatedStories && relatedStories.length > 0
            ? relatedStories.slice(0, 3).map((s) => {
                return (
                  <a
                    key={s.sys.id}
                    className="col-md-4 p-0"
                    onClick={() => Router.push(`/stories/${s.sys.id}`)}
                  >
                    <article className="mb-4 card border-0 bg-white">
                      <section className="s-img-wrap">
                        {/* <Link href="/stories/[sid]" as={`/stories/${s.sys.id}`}>*/}

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
                            <p className="s-tit font-weight-bold col-8 mb-1 pl-0">
                              {s.fields.title}
                            </p>
                          </Link>
                          <Link href={s.sys.id}>
                            <p className="s-txt st-tx text-secondary mt-2 mb-1 pl-0">
                              {s.fields.description}
                            </p>
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
      </section>
    </main>
  );
};
export default Story;
