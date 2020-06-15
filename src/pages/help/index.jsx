import Layout from "../../components/layout";
import "../../../public/scss/test.scss";
const HelpCenter = (props) => {
  console.log(props);
  return (
    <Layout meta={props.meta}>
      <header className="">
        <h1>Welcome to the Help Center</h1>
      </header>
      <div className="row">
        <main className="col-6 mx-auto col-md-3 order-md-1">
          <h2>Main content</h2>
        </main>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-6 mx-auto col-md-3">
              <div className="container-fluid">
                <div className="test-carousel-item">Hello</div>
              </div>
            </div>
            <div className="col-6 mx-auto col-md-3">
              <div className="container-fluid">
                <div className="test-carousel-item">Hello</div>
              </div>
            </div>
            <div className="col-6 mx-auto col-md-3">
              <div className="container-fluid">
                <div className="test-carousel-item">Hello</div>
              </div>
            </div>
            <div className="col-6 mx-auto col-md-3">
              <div className="container-fluid">
                <div className="test-carousel-item">Hello</div>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-md-8 order-md-2 text-center text-md-left pr-md-5">
          <h2>Aside component</h2>
        </aside>
      </div>
    </Layout>
  );
};
HelpCenter.defaultProps = {
  meta: {
    title: "Discover, Plan, Book & Enjoy",
    description: "Index description",
  },
};
export default HelpCenter;
