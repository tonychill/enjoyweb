import { useEffect, useState } from "react";
import Link from "next/link";
import Item from "./item";

const MainFeed = ({ alt, title, pimage, body, auth, items }) => {
  useEffect(() => {}, []);

  return (
    <main className="mt-4">
      <section className="header-section mb-4">
        <h3>St. John Homes</h3>
      </section>

      <div className="row">
        {" "}
        {items.length > 0
          ? items.map((item) => {
              return <Item itemobject={item}></Item>;
            })
          : null}
      </div>
    </main>
  );
};

export default MainFeed;
