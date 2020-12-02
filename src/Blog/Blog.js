import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import dateformat from "dateformat";
import gql from "graphql-tag";
import GearPlaceholder from "../Sections/gear";


const Blog = ({ data: { loading, posts } }) => {  
     if (!loading) {
        return (
          <div className="blog">
            <div className="blogbody">
            {posts.map(post => (
              <article className="content" key={post.id}>
                <section>
                <img className="titleImg" src={post.image.url} alt="Alt Title" />
                <div className="date"><span>{dateformat(post.date, "dS mmm")}</span></div>
                </section>
                <section className="second">
                <h2>{post.headline}</h2>
                <div className="description">{post.description}</div>
                </section>
                <section className="third">
                <Link to={`/post/${post.slug}`}>
                  <div className="button"><button>Continue reading &#8680;</button></div>
                </Link>
                </section>
              </article>
            ))}
            </div>
          </div>
        );
      }
      return <GearPlaceholder />;
    };
    const allPosts = gql`
      query posts {
        posts {
          headline
          description
          date
          slug
          image {
            url
          }
        }
      }
    `;
    export default graphql(allPosts)(Blog);