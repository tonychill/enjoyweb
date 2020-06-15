import React, { Component } from "react";
import Layout from "../../components/layout";
import Story from "../../components/content/feed/story";
import RightFeed from "../../components/layout/rightfeed";
import "../../../public/scss/main.scss";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: this.props.sid,
      story: this.props.story,
      relatedStories: this.props.relatedStories,
      client: this.props.client,
      meta: {
        title: this.props.story.fields.title,
        description: "description...",
      },
      metaDescription: "Story description",
    };
    //this.handleStories = this.handleStories.bind(this);
  }

  render() {
    return (
      <Layout meta={this.state.meta}>
        {/* MainContent component will take the place of the story component as a dynamic component.  */}
        <Story
          handleStories={this.handleStories}
          story={this.state.story}
          relatedStories={this.state.relatedStories}
        />
        <RightFeed />
      </Layout>
    );
  }
}
Stories.getInitialProps = async function (context) {
  const { sid } = context.query;
  const client = require("contentful").createClient({
    space: "g5nrk2qtffpm",
    accessToken: "zKNsjO92AmeVn_N82gpDsfFG2c2-yoeh1gavLSSpIrk",
  });
  const story = await client.getEntry(sid);
  const getTags = () => {
    if (story.fields.tags) {
      return story.fields.tags.toString();
    } else return "";
  };
  const tags = await getTags();
  const getRelStories = async () => {
    return await client
      .getEntries({
        content_type: "story",
        "fields.tags[in]": tags,
      })
      .then((stories) => {
        return stories;
      });
  };
  const data = await getRelStories();
  const relatedStories = data.items;
  return { sid, story, client, relatedStories };
};
export default Stories;
