import * as React from "react"

import AdminLayout from "../../layouts/AdminLayout"

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
        <p>Here's whats happening</p>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="title is-5 has-text-centered">Monthly viewers</p>
                  <p class="has-text-centered">424</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="title is-5 has-text-centered">Top article</p>
                  <p class="has-text-centered">Git and Github Introduction</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="title is-5 has-text-centered">New Comments</p>
                  <p class="has-text-centered">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="title is-5 has-text-centered">Failed Login Attempts</p>
                  <p class="has-text-centered">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
export default AdminHome
