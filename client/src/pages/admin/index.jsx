import * as React from "react"

import AdminLayout from "../../layouts/AdminLayout"
import LoginForm from "../../components/forms/LoginForm"

const AdminLoginPage = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
        <LoginForm />
      </div>
    </AdminLayout>
  )
}
export default AdminLoginPage
