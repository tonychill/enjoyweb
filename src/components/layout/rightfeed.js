// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Layout from "../../components/layouts/mainlayout";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// import Link from "next/link";
// import Component from "./scene/component"
// import Component from "./scene/component"
// import Component from "./scene/component"
// import Component from "./scene/component"
import "./rightfeed.scss";
import { Component } from "react";

const RightFeed = () => {
  let DynamicComponent = () => {
    if (1) return "DynamicComponent";
  };

  return (
    <aside className="rt-feed position-sticky d-none d-sm-none d-md-block mw-340 flex-item">
      <section className="mt-2 right side content ">
        <div className="sug-box">
          <div className="m-auto">
            <h3 className="m-auto">{DynamicComponent()}</h3>
          </div>
        </div>
      </section>
    </aside>
  );
};
export default RightFeed;
