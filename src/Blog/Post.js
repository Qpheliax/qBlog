import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import GearPlaceholder from "../Sections/gear";

const SinglePost = ({ data: { loading, post } }) => {
  if (!loading) {
    return (
      <div className="post">
        <div className="postbody">
          <article>
        <section className="back up">
            <Link to={`/`}>
                <button>&#8678; Back</button>
            </Link>
          </section>
          <section className="postheader">
            <h2>{post.headline}</h2>
            <div className="date">{post.date}</div>
          </section>
          <section className="posttext">
            <img src={post.image.url} alt="Alt Text" />
            <p dangerouslySetInnerHTML={{ __html: post.description }} />
            <p dangerouslySetInnerHTML={{ __html: post.postText }} />
          </section>
          <section className="back down">
            <Link to={`/`}>
                <button>&#8678; Back</button>
            </Link>
          </section>
          </article>
        </div>
      </div>
    );
  }
  return <GearPlaceholder />;
};
const singlePost = gql`
  query singlePost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      headline
      description
      date
      postText
      image {
        url
      }
    }
  }
`;
export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug,
    },
  }),
})(SinglePost);
