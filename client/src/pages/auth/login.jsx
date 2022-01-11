import * as React from "react"

import AdminLayout from "../../layouts/AdminLayout"
import LoginForm from "../../components/forms/LoginForm"

const AdminLoginPage = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
        <div class="pb-6 pt-6">
          <p class="title is-4 has-text-centered">
            Welcome back Wahome,
            <br /> Please login to add more content
          </p>
          <div class="pt-5">
            <LoginForm />
          </div>
        </div>
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
      </div>
    </AdminLayout>
  )
}
export default AdminLoginPage
