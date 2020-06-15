import DTools from "../components/utilities/dtools";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import MainContent from "../components/content";
import RightFeed from "../components/layout/rightfeed";
import { useState } from "react";

const IndexPage = (props) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Layout meta={props.meta} path={path}>
      <MainContent auth={props.auth} setModalShow={props.setModalShow} />
      <RightFeed />
    </Layout>
  );
};
IndexPage.defaultProps = {
  meta: {
    title: "Discover, Plan, Book & Enjoy",
    description: "Index description",
  },
};
export default IndexPage;
