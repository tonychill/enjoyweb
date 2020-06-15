import "./search.scss";
const algoliasearch = require("algoliasearch");

const client = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_KEY);
const index = client.initIndex("content");
const Search = () => {
  return (
    <form action="plan" method="get" className="d-inline-block my-2 my-lg-0">
      <input type="search" className="form-control mr-sm-2 sch-bar test-search-bar p-4" aria-label="Search" placeholder="Search" />
    </form>
  );
};
export default Search;

/*
Search needs to be smart and dynamic. User actions combined with their location within the platform will determin search behavior. 
*/
