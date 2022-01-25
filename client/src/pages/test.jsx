import React from "react"
import { graphql, Link } from "gatsby"
import PageLayout from "../layouts/PageLayout"

const IndexPage = ({ data }) => (
  <PageLayout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <p>{document.node.id}</p>
        </li>
      ))}
    </ul>
  </PageLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          id
        }
      }
    }
  }
`
