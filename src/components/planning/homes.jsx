import Layout from "../../components/layouts/mainlayout";
import Bookables from "../../components/bookables/bookables";
import Map from "./googleapiwrapper";
import "../../../public/scss/main.scss";
import { useRouter } from "next/router";
const meta = {
  title: "Homes",
  description: "Beautiful Virgin Islands vacation homes."
};
const Homes = () => {
  const router = useRouter();
  const pid = router.asPath;
  //   console.log(pid);

  return (
    <Layout meta={meta}>
      <section className="homes col-md-10 m-auto">
        <div className=""></div>
      </section>
      <Map />
    </Layout>
  );
};

export default Homes;
