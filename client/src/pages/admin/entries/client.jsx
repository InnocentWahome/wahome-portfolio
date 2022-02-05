import * as React from "react"
import ClientForm from "../../../components/forms/ClientForm"
import AdminLayout from "../../../layouts/AdminLayout"

const AddQualificationsPage = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
         <ClientForm />
      </div>
    </AdminLayout>
  )
}
export default AddQualificationsPage
