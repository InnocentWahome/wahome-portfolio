import * as React from "react"

import AdminLayout from "../../../layouts/AdminLayout"

const AddQualificationsPage = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
        <p>Choose one to update</p>
        <div class="buttons">
          <a class="button is-info" href="/admin/entries/article">
            Add Article
          </a>
          <a class="button is-info" href="/admin/entries/work">
            Add Work
          </a>
          <a class="button is-info" href="/admin/entries/client">
            Add Client
          </a>
          <a class="button is-info" href="/admin/entries/personalProject">
            Add Project
          </a>
        </div>
      </div>
    </AdminLayout>
  )
}
export default AddQualificationsPage
