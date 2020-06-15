import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "../../../public/scss/main.scss";
//import "./stories.scss";
const meta = { title: "This the Story", description: "Story description" };

const StoryCategories = ({ alt, title, pimage, body }) => {
  const router = useRouter();
  const { storytypes } = router.query;
  const client = require("contentful").createClient({
    space: "g5nrk2qtffpm",
    accessToken: "zKNsjO92AmeVn_N82gpDsfFG2c2-yoeh1gavLSSpIrk",
  });
  console.log({ storytypes });
  async function fetchEntriesForContentType() {
    const entries = await client.getEntries({
      order: "-sys.createdAt",
      content_type: "story",
    });
    console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getStories() {
      const content = await client.getContentTypes();
      const types = content.items;
      const allStories = await fetchEntriesForContentType();

      setStories([...allStories]);
      //console.log("content from getContentTypes", content);
      //console.log("types variable from content.items", types);
      //console.log("types[0]", types[0]);
      //console.log("types[2]", types[2]);
      //console.log("allStories variable", allStories);
    }
    getStories();
  }, []);
  const category = [];
  stories.map((s) => {
    if (s.fields.category === storytypes) {
      category.push(s);
    }
  });
  console.log(category);
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
                    <h1>Hello</h1>
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

export default StoryCategories;
