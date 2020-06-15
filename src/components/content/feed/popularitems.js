import Link from "next/link";
import "../maincontent.scss";
const popularitems = [
  {
    id: 1,
    name: "item 1",
    title: "title 1",
    bgimgurl: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/caribbean-beaches/assets/beautiful-barbados-bottom-bay-beach-hero.jpg?$750x667$",
    url: "/",
  },
  {
    id: 2,
    name: "item 2",
    title: "title 2",
    bgimgurl: "https://www.fodors.com/wp-content/uploads/2018/11/shutterstock_1074438482.jpg",
    url: "/",
  },
  {
    id: 3,
    name: "item 3",
    title: "title 3",
    bgimgurl: "https://www.caribbean-flights.com/backoffice2/upload/314!Caribbean%20Flights.jpg",
    url: "/",
  },
  {
    id: 4,
    name: "item 4",
    title: "title 4",
    bgimgurl: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/e0ca85376ad22e1ba25428eb3be5ebbe73bfed13/big-8064d67a6e82f62b447d69f53326df5c.jpg",
    url: "/",
  },
];
const PopularItems = () => {
  return (
    <div className="pop-items mt-3 mb-5">
      <div className="feed mt-4 m-auto ">
        <div className="mb-4">
          <h4 className="mb-0">Popular things to do</h4>
          <p>There is so many cool things that you can do while your on vacation.</p>
        </div>
        {/*Import the following into a carousel*/}
        <div className="row mx-0">
          {popularitems.length > 0
            ? popularitems.map((pi) => {
                return (
                  <div key={pi.id} className="col-md-3 px-0 pop-wrapper ">
                    <div className="mx-1">
                      <Link href="www.google.com">
                        <a>
                          <div className="pop-item-bg pop-item rounded" style={{ backgroundImage: `url(${pi.bgimgurl})` }}>
                            <section></section>
                            <section></section>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default PopularItems;
