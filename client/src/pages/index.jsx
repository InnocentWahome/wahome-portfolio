import * as React from "react"

import PageLayout from "../layouts/PageLayout"

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="columns pt-6">
          <div className="column">
            <h2 className="title is-2 pt-6">Level 2 heading</h2>
            <p className="content">Cool content. Using Bulma!</p>
          </div>
          <div className="column is-four-fifths">
            <h2 className="title is-2 pt-6">Level 2 heading</h2>
            <p className="content">This column is cool too!</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
export default IndexPage
