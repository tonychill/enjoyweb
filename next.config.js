const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  target: "serverless",
  // env: {
  //   SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  //   ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  // },
});
