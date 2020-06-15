import { useEffect, useState } from "react";
import Link from "next/link";
import "./planning.scss";

const Bookable = () => {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_SECRET_KEY,
  });

  async function fetchBookables() {
    const bookables = await client.getEntries({
      order: "-sys.createdAt",
      content_type: "bookable",
    });
    console.log(bookables);
    if (bookables.items) return bookables.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  const [bookables, setBookables] = useState([]);
  useEffect(() => {
    async function getBookables() {
      const allBookables = await fetchBookables();
      setBookables([...allBookables]);
    }
    getBookables();
  }, []);
  let type = "yacht";
  const mapingTest = () => {
    bookables.map((b) => {
      console.log(b.fields.name);
    });
  };
  mapingTest();
  return (
    <ul className="pl-0 b-list">
      {bookables.length > 0
        ? bookables.map((b) => {
            const sl = `/${type}/${b.sys.id}`;
            console.log(b.fields.image.fields.file.url);
            return (
              <li className="" key={b.sys.id}>
                <div className="bookable-wrapper">
                  <div className="card-b bg-white mx-3 shadow-sm mb-3 rounded">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={b.fields.image.fields.file.url} className="card-img" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{b.fields.name}</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="price push left">
                            <strong>${b.fields.price}</strong>/{b.fields.bookableType == "home" || b.fields.bookableType == "yacht" ? "night" : "day"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Bookable;
