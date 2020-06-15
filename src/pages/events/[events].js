import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "../../../public/scss/main.scss";
//import "./stories.scss";
const meta = { title: "This the Story", description: "Story description" };

const Events = ({ alt, title, pimage, body }) => {
  const router = useRouter();
  const { events } = router.query;
  const category = 1;
  return (
    <Layout meta={meta}>
      <div className="row">
        <div className="col-md-2 d-none d-md-block"></div>
        <main className="px-0 px-sm-3 mt-2 col-md-10">
          {category.length > 0
            ? category.map((s) => (
                <div key={s.fields.title} className="">
                  <div className="card border-0">
                    <img
                      className="card-img-top"
                      alt={alt}
                      src={s.fields.pimage.fields.file.url}
                    />
                    <div className="card-body pr-0 pl-0">
                      <h6 className="s-tit">{s.fields.title}</h6>
                      <p className="s-txt">{s.fields.description}</p>
                    </div>
                    <div className="Like Comment Share/Repost"></div>
                  </div>
                </div>
              ))
            : null}
        </main>
      </div>
    </Layout>
  );
};

export default Events;
