import React from "react";
import Head from "next/head";

export default ({ props = { title, description } }) => (
  <>
    <Head>
      <title>
        {props.title || "The title for this page has not been set."}
      </title>
      <meta
        name="description"
        content={
          props.description || "The description for this page has not been set."
        }
      />
      <meta
        content="/media/active-icons/coconut_logo.png"
        itemprop="image"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      ></meta>
      <meta charSet="utf-8" />
      <link
        rel="icon"
        sizes="16x16"
        href="/media/active-icons/coconut_logo.png"
        type="image/png"
      ></link>
      <link type="text/css" rel="stylesheet" href="/static/css/main.css" />
      <script src="/js/hscripts.js" />
      <script src="/js/tracking.js" />

      <script src="https://js.stripe.com/v3/"></script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=809262739512390&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
  </>
);
