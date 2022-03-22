import * as React from "react"

import PageLayout from "../layouts/PageLayout"

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p>This section contains</p>
        <ol>
          <li>Personal Projects</li>
          <li>Work experiences</li>
          <li>Past clients</li>
        </ol>
      </div>
    </PageLayout>
  )
}
export default ContactPage
