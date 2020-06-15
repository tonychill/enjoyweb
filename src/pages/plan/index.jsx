import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import MainFeed from "../../components/content/mainfeed";
import Map from "../../components/planning/googleapiwrapper";
import "../../../public/scss/main.scss";
import "./planner.scss";
const meta = {
  title: "Plan the perfect trip.",
  description: "Index description",
};
const Plan = () => {
  const router = useRouter();
  const bid = router.asPath;

  const [items, setItems] = useState([]);

  const client = require("contentful").createClient({
    //$$$ Remove the follwoing keys and replace with environment variables.
    space: "g5nrk2qtffpm",
    accessToken: "zKNsjO92AmeVn_N82gpDsfFG2c2-yoeh1gavLSSpIrk",
  });
  async function fetchEntriesForContentType() {
    let contentType = () => {
      return "bookable";
    };

    console.log(contentType());
    const entries = await client.getEntries({
      order: "-sys.createdAt",
      content_type: contentType(), // Replace this string with a variable that holds the content type as it will be dynamic.
    });

    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  useEffect(() => {
    (async function () {
      const allItems = await fetchEntriesForContentType();
      setItems([...allItems]);
    })();
  }, []);

  return (
    <Layout meta={meta}>
      <MainFeed items={items} />
      {/* <section className="planner flex-item">
        <div className=" row ">
          <div className="col-md-11 m-auto ">
            <section className="row">
              <div className="col-lg-12 rounded">
                <div className="b-container rounded"></div>
              </div>
            </section>
            <section className="row">
               {bookables
                ? bookables.map((b) => {
                    return (
                      <div
                        key={b.sys.id}
                        className="cus-col-lg-3 col-md-4 col-xs-12"
                      >
                        <Link href="/plan/[bid]" as={`/plan/${b.sys.id}`}>
                          <a>
                            <div
                              className="mt-5 rounded b-container"
                              style={{
                                backgroundImage: `url(${b.fields.media[0].fields.file.url})`,
                              }}
                            ></div>
                          </a>
                        </Link>
                      </div>
                    );
                  })
                : null} 
            </section>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default Plan;
