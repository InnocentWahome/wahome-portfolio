import * as React from "react"
import SubscribeForm from "../components/forms/SubscribeForm"
import PageLayout from "../layouts/PageLayout"

const ArticlesPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <p>About me page containing</p>
        <SubscribeForm />
      </div>
    </PageLayout>
  )
}
export default ArticlesPage
